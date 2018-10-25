const Recipe = require('../models/Recipe');

async function findAll(ctx) {
    ctx.body = await Recipe.find({});;
}

async function create(ctx) {
    const newRecipe = new Recipe(ctx.request.body);
    ctx.body = await newRecipe.save();;
}

async function destroy(ctx) {
    const id = ctx.params.id;
    ctx.body = await Recipe.findByIdAndDelete(id);;
}

module.exports = {
    findAll,
    create,
    destroy,
};
