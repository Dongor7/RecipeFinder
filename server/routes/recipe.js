const Router = require('koa-router');
const router = new Router();
const recipeController = require('../controllers/recipe');

router.get('/', recipeController.findAll);
router.post('/', recipeController.create);
router.delete('/:id', recipeController.destroy)

module.exports = router.routes();
