import os
import sys
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import make_pipeline
import pickle

def recommend_recipe(tags, ingredients, minutes, name, nutrition):
    # Load the preprocessor and model from the .pkl file
    with open("recipe_recommender.pkl", "rb") as f:
        preprocessor, model, df = pickle.load(f)

    # Transform input data
    input_data = pd.DataFrame({
        'tags': [tags],
        'ingredients': [ingredients],
        'minutes': [minutes],
        'name': [name],
        'nutrition': [nutrition]
    })
    X_input = preprocessor.transform(input_data)

    # Find nearest neighbors
    distances, indices = model.kneighbors(X_input)
    recommendations = df.iloc[indices[0]].copy()  # Get recommendations

    return recommendations