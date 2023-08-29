import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import random
from keras.applications import vgg16
from keras.models import Model
from keras.applications.imagenet_utils import preprocess_input
from sentence_transformers import SentenceTransformer

vgg_model = vgg16.VGG16(weights = 'imagenet')


class PlaceRecommender:
    """
        Class which recommend interesting places
    """

    def __init__(self, descriptions):
        """
            description_df: Series of places descriptions
        """
        self.descriptions = descriptions
        self.text_model = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')
        self.similarities = pd.DataFrame(
            cosine_similarity(self.text_model.encode(descriptions, show_progress_bar = True)))
        self.feat_extractor = Model(inputs = vgg_model.input, outputs = vgg_model.get_layer("fc2").output)

    def recommend_on_history(self, history: list) -> list:
        """
            descriptions: String of image descriptions
        """
        to_recommend = []
        for index in history:
            recommended_index = self.similarities.loc[index].sort_values(ascending = False).index.tolist()[1:6]
            to_recommend.extend(recommended_index)

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
