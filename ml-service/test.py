import pandas as pd

data = pd.read_csv('data_with_array_emb_custom.csv')

print(len(eval(data['image_embeddings'][0])))
