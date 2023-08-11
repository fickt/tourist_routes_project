from fastapi import FastAPI
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
from nltk.stem.porter import PorterStemmer
import random

app = FastAPI(title = 'Recommender System')

data = pd.read_csv("processed.csv")

cv = CountVectorizer(max_features = 1500)

vectors = cv.fit_transform(data["tags"]).toarray()

ps = PorterStemmer()


def stem(text):
    y = []
    for e in text.split():
        y.append(ps.stem(e))
    return " ".join(y)


data["tags"] = data["tags"].apply(stem)


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
        for i in range(len(to_recommend)):
            result[f'place{i}'] = {
                'index': to_recommend[i],
                'name': data.iloc[to_recommend[i]]['name'],
                'type': data.iloc[to_recommend[i]]['type']
            }

        return result

    except Exception as ex:
        print(ex)


@app.post('/recommend-on-image')
def recommend_on_image(caption: str):
    pass
