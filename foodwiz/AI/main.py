from typing import Any, Dict
from fastapi import FastAPI, HTTPException
from recommendation import recommend_recipe  # Assuming this module is correctly implemented
from schemas import RecipeRequest, RecipeResponse  # Assuming these schemas are defined

app = FastAPI()



@app.get("/")
async def root():
    print("Hello, Python")
    return {"message": "Hello, Python"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
