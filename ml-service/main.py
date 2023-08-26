import cv2
from fastapi import FastAPI, File, UploadFile
import pandas as pd
from sqlalchemy import create_engine, inspect
from recommender import PlaceRecommender
from PIL import Image
import io
import keras
import numpy as np
import time

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
    routes = pd.read_sql('select * from routes', connection).set_index('id')
    route_difficulties = pd.read_sql('select * from route_difficulties', connection).set_index('id')
    place_recommender = PlaceRecommender(routes['description'])
except Exception as ex:
    print(ex)

image_classifier = keras.models.load_model('model.keras')


def read_image(file):
    image = Image.open(io.BytesIO(file))
    return image


def predict(image):
    pred = np.argmax(image_classifier.predict(np.expand_dims(image, 0))[0])
    match pred:
        case 0:
            return 'высокие горы вершины высота'
        case 1:
            return 'старинные здания музеи архитектура'
        case 2:
            return 'ледники белый снег'
        case 3:
            return 'зеленые леса деревья'
        case 4:
            return 'реки озера водоемы берега'
        case 5:
            return 'улицы парки скверы культура кафе магазин'


@app.post('/recommend-on-servey')
def recommend_on_servey(likes: str):
    try:
        to_recommend = place_recommender.recommend_on_description(likes)

        result = {}

        for i in range(len(to_recommend)):
            result[f'place{i}'] = {
                'index': to_recommend[i] + 1,
                'name': routes.iloc[to_recommend[i]]['name'],
            }

        return result

    except Exception as ex:
        print(ex)


@app.post('/recommend-on-image')
async def recommend_on_image(file: UploadFile = File(...)):
    try:
        image = np.array(read_image(await file.read()))
        image = cv2.resize(image, (150, 150))
        caption = predict(image)
        to_recommend = place_recommender.recommend_on_description(caption)

        result = {}

        for i in range(len(to_recommend)):
            result[f'place{i}'] = {
                'index': to_recommend[i] + 1,
                'name': routes.iloc[to_recommend[i]]['name'],
            }
        return result
    except Exception as ex:
        print(ex)
