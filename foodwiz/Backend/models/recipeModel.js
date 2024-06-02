const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    ingredients: {
        type: String,
        required: false
    },
    minutes: {
        type: Number,
        required: false
    },
    tags: {
        type: String,
        required: false
    },
    nutrition: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
