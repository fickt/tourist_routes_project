import keras.models
from sklearn.metrics.pairwise import cosine_similarity
from keras.models import Model


model = keras.models.load_model('feature_extractor.keras')

class PlaceRecommender:
    """
        Class which recommend interesting places
    """
    def __init__(self):
        """
            description_df: Series of places descriptions
        """
        self.feat_extractor = Model(inputs = model.input, outputs = model.get_layer("dense_1").output)

    def recommend_on_image(self, image, embeddings):
        features = self.feat_extractor(image)
        to_recommend = []
        for embedding in embeddings:
            to_recommend.append(cosine_similarity(features, eval(embedding)))

        to_recommend = sorted(list(enumerate(to_recommend)), reverse = True, key = lambda x: x[1])[0:5]
        to_recommend = [place[0] for place in to_recommend]
        return to_recommend
