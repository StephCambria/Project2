const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const seedFridge = require('./fridgeData');
const seedGrocery = require('./groceryData');
const seedRecipe = require('./recipeData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedFridge();

  await seedGrocery();

  await seedRecipe();

  process.exit(0);
};

seedAll();
