const router = require('express').Router();

const userRoutes = require('./user-routes');
const fridgeRoutes = require('./fridge-routes');
const groceryRoutes = require('./grocery-routes');
const recipeRoutes = require('./recipe-routes');
const foodRoutes = require('./food-routes');

router.use('/user', userRoutes);
router.use('/fridge', fridgeRoutes);
router.use('/grocery', groceryRoutes);
router.use('/recipe', recipeRoutes);
router.use('/food', foodRoutes);

module.exports = router;
