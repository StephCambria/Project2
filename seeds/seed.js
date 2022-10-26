const sequelize = require('../config/connection');
const { User, Fridge, Grocery, Recipe } = require('../models');

const userData = require('./userData.json');
const fridgeData = require('./fridgeData.json');
const groceryData = require('./groceryData.json');
const recipeData = require('./recipeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user =  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const fridge = await Fridge.bulkCreate(fridgeData, {
    individualHooks: true,
    returning: true,
  });
  
  const grocery = await Grocery.bulkCreate(groceryData, {
    individualHooks: true,
    returning: true,
  });

  const recipe = await Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
