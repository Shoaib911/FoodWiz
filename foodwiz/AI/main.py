from typing import Any, Dict
from fastapi import FastAPI, HTTPException
from recommendation import recommend_recipe
from schemas import RecipeRequest, RecipeResponse

app = FastAPI()

@app.post("/recommend_recipe")
async def recommendRecipe(recipe: RecipeRequest):
    try:
        print(recipe)
        recommendations = recommend_recipe(
            recipe.tags, recipe.ingredients, recipe.minutes, recipe.name, recipe.nutrition
        )
        return recommendations.to_dict(orient='records')
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)