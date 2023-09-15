from sklearn.metrics.pairwise import cosine_similarity
from keras.models import Model
from keras.applications import vgg19

vgg19 = vgg19.VGG19(weights = 'imagenet')


class PlaceRecommender:
    """
        Class which recommend interesting places
    """
    def __init__(self):
        """
            description_df: Series of places descriptions
        """
        self.feature_vgg = Model(inputs = vgg19.input, outputs = vgg19.get_layer("fc2").output)

    def recommend_on_image(self, image, embeddings):
        features = self.feature_vgg(image)
        to_recommend = []
        for embedding in embeddings:
            to_recommend.append(cosine_similarity(features, [eval(embedding)]))

        to_recommend = sorted(list(enumerate(to_recommend)), reverse = True, key = lambda x: x[1])[0:5]
        to_recommend = [place[0] for place in to_recommend]
        return to_recommend
