from fastapi import FastAPI
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
from nltk.stem.porter import PorterStemmer
import random
from sqlalchemy import create_engine, text
from nlp_rake import Rake
import nltk
from nltk.corpus import stopwords

app = FastAPI(title = 'Recommender System')

alchemy_engine = create_engine('postgresql+psycopg2://root:root@127.0.0.1:5432/postgres')

connection = alchemy_engine.connect()

routes = pd.read_sql('select * from routes', connection).set_index('id')
route_difficulties = pd.read_sql('select * from route_difficulties', connection).set_index('id')

nltk.download("russian")
stops = list(set(stopwords.words("russian")))

rake = Rake(stopwords = stops, max_words = 5)

key_words = (
    routes["description"].apply(rake.apply).apply(lambda x: " ".join([e[0] for e in x]))
)
routes['key_words'] = key_words

cv = CountVectorizer(max_features = 1500)

vectors = cv.fit_transform(routes["key_words"]).toarray()

ps = PorterStemmer()


def stem(text):
    y = []
    for e in text.split():
        y.append(ps.stem(e))
    return " ".join(y)


routes["key_words"] = routes["key_words"].apply(stem)


@app.post('/recommend-on-servey')
def recommend_on_survey(likes: str):
    arr = likes.split(',')
    likes = list(filter(lambda x: x != "", arr))
    to_recommend = []
    try:
        for caption in likes:
            vector = cv.transform([caption]).toarray()
            distances = []
            for e in vectors:
                distances.append(cosine_similarity(vector, [list(e)]))

            distances = sorted(
                list(enumerate(distances)), reverse = True, key = lambda x: x[1]
            )[0:5]
            to_recommend.extend([place[0] for place in distances])

        to_recommend = random.sample(sorted(set(to_recommend)), 5)

        result = {}
        print(to_recommend)
        for i in range(len(to_recommend)):
            print(routes.iloc[to_recommend[i]]['difficulty_id'] - 1)

            result[f'place{i}'] = {
                'index': to_recommend[i] + 1,
                'name': routes.iloc[to_recommend[i]]['name'],
                'description': routes.iloc[to_recommend[i]]['description'],
                'difficulty': route_difficulties.iloc[routes.iloc[to_recommend[i]]['difficulty_id'] - 1]['name'],
                'longitude': routes.iloc[to_recommend[i]]['longitude'],
                'latitude': routes.iloc[to_recommend[i]]['latitude'],
                'distance_from_nearest_city': routes.iloc[to_recommend[i]]['distance_from_nearest_city']
            }

        return result

    except Exception as ex:
        print(ex)


@app.post('/recommend-on-image')
def recommend_on_image(caption: str):
    pass
