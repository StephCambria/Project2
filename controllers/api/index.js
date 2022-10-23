const router = require('express').Router();
import userRoutes from './user-routes.js';
import fridgeRoutes from './fridge-routes.js';
import groceryRoutes from './grocery-routes';
import recipeRoutes from './recipe-routes';
import foodRoutes from './food-routes';

router.use('/user', userRoutes);
router.use('/fridge', fridgeRoutes);
router.use('/grocery', groceryRoutes);
router.use('/recipe', recipeRoutes);
router.use('/food', foodRoutes);

export default router;
