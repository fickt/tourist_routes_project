import numpy as np
import pandas as pd
from nlp_rake import Rake
from nltk.corpus import stopwords
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import random
import nltk
from keras.applications import vgg16
from keras.models import Model
from keras.applications.imagenet_utils import preprocess_input

nltk.download("stopwords")

vgg_model = vgg16.VGG16(weights = 'imagenet')


class PlaceRecommender:
    """
        Class which recommend interesting places
    """

    def __init__(self, descriptions: pd.Series):
        """
            description_df: Series of places descriptions
        """
        self.stops = list(set(stopwords.words("russian")))
        self.descriptions = descriptions
        self.cv = CountVectorizer(max_features = 1500)
        self.rake = Rake(stopwords = self.stops, max_words = 5)
        self.vectors = self.cv.fit_transform(self._extract_keywords()).toarray()
        self.feat_extractor = Model(inputs = vgg_model.input, outputs = vgg_model.get_layer("fc2").output)

    def _extract_keywords(self) -> pd.Series:
        """
            Function extracts keywords from text
        """
        keywords = (
            self.descriptions.apply(self.rake.apply).apply(lambda x: " ".join([e[0] for e in x]))
        )

        return keywords

    def recommend_on_description(self, descriptions: str) -> list:
        """
            descriptions: String of image descriptions
        """
        arr = list(filter(lambda x: x != "", descriptions.split('|')))
        to_recommend = []
        for caption in arr:
            vector = self.cv.transform([caption]).toarray()
            distances = []
            for e in self.vectors:
                distances.append(cosine_similarity(vector, [list(e)]))

            distances = sorted(
                list(enumerate(distances)), reverse = True, key = lambda x: x[1]
            )[0:5]
            to_recommend.extend([place[0] for place in distances])

        to_recommend = random.sample(sorted(set(to_recommend)), 5)
        return to_recommend

    def recommend_on_image(self, image, embeddings):
        features = self.feat_extractor(preprocess_input(np.expand_dims(image, 0)))
        to_recommend = []
        for embedding in embeddings:
            to_recommend.append(cosine_similarity(features, [eval(embedding)]))

        to_recommend = sorted(list(enumerate(to_recommend)), reverse = True, key = lambda x: x[1])[0:5]
        to_recommend = [place[0] for place in to_recommend]
        return to_recommend
