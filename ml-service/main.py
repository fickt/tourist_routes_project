from fastapi import FastAPI, File, UploadFile, HTTPException
import pandas as pd
from sqlalchemy import create_engine, inspect
from recommender import PlaceRecommender
from PIL import Image
import io, base64
import numpy as np
import time
import keras

app = FastAPI(title = 'Recommender System')

alchemy_engine = create_engine('postgresql+psycopg2://root:root@db:5432/postgres')

connection = alchemy_engine.connect()

while True:
    if len(inspect(alchemy_engine).get_table_names()) == 0:
        print('Make table migrations with following command: docker exec app php artisan migrate:fresh --seed')
        time.sleep(5)
    else:
        break

try:
    routes = pd.read_sql('select * from routes', connection)
    route_difficulties = pd.read_sql('select * from route_difficulties', connection)

except Exception as ex:
    print(ex)

place_recommender = PlaceRecommender()
landscape_clf = keras.models.load_model('clfv2.keras')



@app.post('/recommend-on-image')
async def recommend_on_image(file):
    image = Image.open(io.BytesIO(base64.decodebytes(bytes(file['file'], "utf-8"))))

    if np.array(image).shape[0] > 1080 or np.array(image).shape[0] > 1920 or np.array(image).shape[2] != 3:
        raise HTTPException(status_code = 400, detail = 'Invalid file shape')

    is_landscape = 1 if landscape_clf.predict(
        np.expand_dims(image, 0) / 255.0) > 0.5 else 0

    if not is_landscape:
        raise HTTPException(status_code = 400, detail = 'Loaded image is not landscape')

    try:
        to_recommend = place_recommender.recommend_on_image(
            np.expand_dims(image, 0) / 255.0,
            routes['image_embeddings'])

        result = {}
        for i in range(len(to_recommend)):
            result[f'place{i}'] = {
                'index': to_recommend[i] + 1,
            }
        return result
    except Exception as ex:
        return {'error': str(ex)}
