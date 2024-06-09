const Recipe = require('../models/recipeModel');
const mongoose = require('mongoose');
const axios = require('axios');

// Get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({ createdAt: -1 });
    res.status(200).json(recipes);
};

// Get single recipe
const getRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such recipe exists.' });
    }

    const recipe = await Recipe.findById(id);

    if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(recipe);
};

// Create new recipe
const createRecipe = async (req, res) => {
    const { name, ingredients, minutes, tags, nutrition } = req.body;

    try {
        const recipe = await Recipe.create({ name, ingredients, minutes, tags, nutrition });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such recipe exists.' });
    }

    const recipe = await Recipe.findOneAndDelete({ _id: id });

    if (!recipe) {
        return res.status(400).json({ message: 'Recipe not found' });
    }

    res.status(200).json(recipe);
};

// Update recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such recipe exists.' });
    }

    const recipe = await Recipe.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(recipe);
};

// Get recipe recommendations from AI module
const getRecommendations = async (req, res) => {
    const { tags, ingredients, minutes, name, nutrition } = req.body;

    try {
        const response = await axios.post("http://127.0.0.1:8000/recommend_recipe", {
            tags,
            ingredients,
            minutes,
            name,
            nutrition,
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error communicating with AI module: ' + error.message);
    }
};

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe,
    getRecommendations
};
