import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
from nltk.stem.porter import PorterStemmer
import random

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


def recommend_on_survey(list_of_answers: list) -> list:
    likes = list(filter(lambda x: x != "", list_of_answers))
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

        return to_recommend

    except Exception as ex:
        print(ex)


def recommend_on_image(caption: str) -> list:
    to_recommend = []
    try:
        vector = cv.transform([caption]).toarray()
        distances = []
        for e in vectors:
            distances.append(cosine_similarity(vector, [list(e)]))

        distances = sorted(
            list(enumerate(distances)), reverse = True, key = lambda x: x[1]
        )[0:5]
        to_recommend.extend([place[0] for place in distances])

        return to_recommend

    except Exception as ex:
        print(ex)


if __name__ == '__main__':
    print(recommend_on_survey(['воды']))
