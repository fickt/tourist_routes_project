from fastapi import FastAPI
import pandas as pd
from sqlalchemy import create_engine
from recommender import PlaceRecommender

app = FastAPI(title = 'Recommender System')

alchemy_engine = create_engine('postgresql+psycopg2://root:root@127.0.0.1:5432/postgres')

connection = alchemy_engine.connect()

routes = pd.read_sql('select * from routes', connection).set_index('id')
route_difficulties = pd.read_sql('select * from route_difficulties', connection).set_index('id')

place_recommender = PlaceRecommender(routes['description'])


@app.post('/recommend')
def recommend(likes: str):
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
