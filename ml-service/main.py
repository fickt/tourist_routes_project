from fastapi import FastAPI, File, UploadFile
import pandas as pd
from sqlalchemy import create_engine, inspect
from recommender import PlaceRecommender
from PIL import Image
import io
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
    routes = pd.read_sql('select * from routes', connection)
    route_difficulties = pd.read_sql('select * from route_difficulties', connection)

except Exception as ex:
    print(ex)

place_recommender = PlaceRecommender(routes['description'] + ' ' + routes['name'])

def read_image(file):
    image = Image.open(io.BytesIO(file))
    return image

@app.post('/recommend-on-history')
def recommend_on_history(history: str):
    try:
        arr = list(map(lambda x: int(x) - 1, history.split(',')))

        to_recommend = place_recommender.recommend_on_history(arr)

        result = {}
        print(to_recommend)
        for i in range(len(to_recommend)):
            result[f'place{i}'] = {
                'index': to_recommend[i] + 1,
                'name': routes.iloc[to_recommend[i]]['name'],
            }

        return result

    except Exception as ex:
        print(ex)
