from fastapi import FastAPI, File, UploadFile, HTTPException
from pydantic import BaseModel
import pandas as pd
from sqlalchemy import create_engine, inspect
from recommender import PlaceRecommender
from PIL import Image
import io, base64, re
import numpy as np
import time
import keras
from keras.applications.imagenet_utils import preprocess_input

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
    routes.drop(routes.index[0], inplace = True)

except Exception as ex:
    print(ex)

place_recommender = PlaceRecommender()
landscape_clf = keras.models.load_model('clfv2.keras')

class File(BaseModel):
    file: str


@app.post('/recommend-on-image')
async def recommend_on_image(img: File):
    image = Image.open(io.BytesIO(base64.b64decode(bytes(img.file, "utf-8"))))

    if np.array(image).shape[0] > 1080 or np.array(image).shape[1] > 1920 or np.array(image).shape[2] != 3:
        raise HTTPException(status_code = 400, detail = 'Invalid file shape')

    is_landscape = 1 if landscape_clf.predict(
        np.expand_dims(np.array(image.resize((150, 150))), 0) / 255.0) > 0.5 else 0

    if not is_landscape:
        raise HTTPException(status_code = 400, detail = 'Loaded image is not landscape')

    try:
        to_predict = preprocess_input(np.expand_dims(np.array(image.resize((224, 224))), 0))
        to_recommend = place_recommender.recommend_on_image(to_predict, routes['embedding'])


        return to_recommend
    except Exception as ex:
        return {'error': str(ex)}
