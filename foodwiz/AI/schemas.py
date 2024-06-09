from pydantic import BaseModel
from typing import List, Optional

class RecipeRequest(BaseModel):
    tags: str
    ingredients: str
    minutes: int
    name: str
    nutrition: str

class RecipeResponse(BaseModel):
    name: str
    ingredients: str
    steps: str