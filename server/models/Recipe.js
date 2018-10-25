const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
    {
        ingredients: [String],
        description: String,
    },
    { timestamps: true }
);

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = mongoose.model('Recipe');
