const seedFridge = require('./fridgeData');
const seedGrocery = require('./groceryData');
const seedRecipe = require('./recipeData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFridge();

  await seedGrocery();

  await seedRecipe();

  process.exit(0);
};

seedAll();
