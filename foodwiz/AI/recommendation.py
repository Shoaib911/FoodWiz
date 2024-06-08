import os
import sys
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import make_pipeline
import pickle


# Load the dataset
df = pd.read_csv("C:\\Users\\Administrator\\Desktop\\Shoaib\\FoodWiz\\foodwiz\\RAW_recipes.csv")

# Handle missing values
df = df.dropna(subset=['tags', 'ingredients', 'minutes', 'name', 'nutrition'])

# Preprocess text data
df['tags'] = df['tags'].apply(lambda x: ','.join(x.lower().replace(' ', '').split(',')))
df['ingredients'] = df['ingredients'].apply(lambda x: ','.join(x.lower().replace(' ', '').split(',')))
df['name'] = df['name'].apply(lambda x: x.lower())
df['nutrition'] = df['nutrition'].apply(lambda x: x.lower())

# Feature engineering for 'tags' and 'ingredients'
vectorizer_tags = TfidfVectorizer()
vectorizer_ingredients = TfidfVectorizer()
vectorizer_name = TfidfVectorizer()
vectorizer_nutrition = TfidfVectorizer()

# Prepare column transformer
preprocessor = ColumnTransformer(
    transformers=[
        ('tags', vectorizer_tags, 'tags'),
        ('ingredients', vectorizer_ingredients, 'ingredients'),
        ('minutes', 'passthrough', ['minutes']),
        ('name', vectorizer_name, 'name'),
        ('nutrition', vectorizer_nutrition, 'nutrition')
    ],
    remainder='drop'
)

# Step 2: Model Training
# Transform the data
X = preprocessor.fit_transform(df[['tags', 'ingredients', 'minutes', 'name', 'nutrition']])

# Train the NearestNeighbors model
model = NearestNeighbors(n_neighbors=1, algorithm='auto', metric='cosine')
model.fit(X)

# Step 3: Prediction

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