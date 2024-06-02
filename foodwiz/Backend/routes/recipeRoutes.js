const express = require('express');
const newLocal = '../controllers/recipeController';
const {
    createRecipe,
    getRecipe,
    getRecipes,
    updateRecipe,
    deleteRecipe,
    getRecommendations
} = require(newLocal);
const router = express.Router();

// Get all recipes
router.get('/', getRecipes);

// Get single recipe
router.get('/:id', getRecipe);

// Post a new recipe
router.post('/', createRecipe);

// Delete recipe
router.delete('/:id', deleteRecipe);

// Update recipe
router.patch('/:id', updateRecipe);

// Get recipe recommendations
router.post('/recommend', getRecommendations);

module.exports = router;
