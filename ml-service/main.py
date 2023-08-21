import cv2
from fastapi import FastAPI, File, UploadFile
import pandas as pd
from sqlalchemy import create_engine
from recommender import PlaceRecommender
from PIL import Image
import base64
import io
import keras
import numpy as np

app = FastAPI(title = 'Recommender System')

alchemy_engine = create_engine('postgresql+psycopg2://root:root@0.0.0.0:5432/postgres')

connection = alchemy_engine.connect()

routes = pd.read_sql('select * from routes', connection).set_index('id')
route_difficulties = pd.read_sql('select * from route_difficulties', connection).set_index('id')

place_recommender = PlaceRecommender(routes['description'])
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
        to_recommend = place_recommender.recommend(likes)

        result = {}

        for i in range(len(to_recommend)):
            result[f'place{i}'] = {
                'index': to_recommend[i] + 1,
                'name': routes.iloc[to_recommend[i]]['name'],
                'description': routes.iloc[to_recommend[i]]['description'],
                'difficulty': route_difficulties.iloc[routes.iloc[to_recommend[i]]['difficulty_id'] - 1]['name'],
                'longitude': routes.iloc[to_recommend[i]]['longitude'],
                'latitude': routes.iloc[to_recommend[i]]['latitude'],
                'distance_from_nearest_city': routes.iloc[to_recommend[i]]['distance_from_nearest_city'],
                'rating': routes.iloc[to_recommend[i]]['rating']
            }

        return result

    except Exception as ex:
        return ex

@app.post('/recommend-on-image')
async def recommend_on_image(file: UploadFile = File(...)):
    image = np.array(read_image(await file.read()))
    image = cv2.resize(image, (150,150))
    caption = predict(image)
    to_recommend = place_recommender.recommend(caption)

    result = {}

    for i in range(len(to_recommend)):
        result[f'place{i}'] = {
            'index': to_recommend[i] + 1,
            'name': routes.iloc[to_recommend[i]]['name'],
            'description': routes.iloc[to_recommend[i]]['description'],
            'difficulty': route_difficulties.iloc[routes.iloc[to_recommend[i]]['difficulty_id'] - 1]['name'],
            'longitude': routes.iloc[to_recommend[i]]['longitude'],
            'latitude': routes.iloc[to_recommend[i]]['latitude'],
            'distance_from_nearest_city': routes.iloc[to_recommend[i]]['distance_from_nearest_city'],
            'rating': routes.iloc[to_recommend[i]]['rating']
        }
    return result