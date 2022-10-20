const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const fridgeRoutes = require('./fridge-routes.js');
const groceryRoutes = require('./grocery-routes');
const recipeRoutes = require('./recipe-routes');

router.use('/user', userRoutes);
router.use('/fridge', fridgeRoutes);
router.use('/grocery', groceryRoutes);
router.use('/recipe', recipeRoutes);

module.exports = router;
