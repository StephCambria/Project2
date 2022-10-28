const User = require("./User");
const Recipe = require("./Recipe");
const Fridge = require("./Fridge");
const Grocery = require("./Grocery");
const Food = require("./Food");

// User has...
User.hasMany(Recipe, {
  foreignKey: "recipe_id",
});

User.hasOne(Fridge, {
  foreignKey: "fridge_id",
});

User.hasMany(Grocery, {
  foreignKey: "grocery_id",
});

User.hasMany(Food, {
  foreignKey: "food_id",
});

//=================================

// Recipe has...
Recipe.belongsTo(Food, {
  foreignKey: "food_id",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

Recipe.belongsTo(Fridge, {
  foreignKey: "fridge_id",
});

Recipe.belongsTo(Grocery, {
  foreignKey: "grocery_id",
});

//=================================

// Fridge has...
Fridge.hasMany(Recipe, {
  foreignKey: "recipe_id",
});

Fridge.hasMany(Food, {
  foreignKey: "food_id",
});

Fridge.hasMany(Grocery, {
  foreignKey: "grocery_id",
});

Fridge.belongsTo(User, {
  foreignKey: "user_id",
});

//=================================

// Grocery has...
Grocery.belongsTo(User, {
  foreignKey: "user_id",
});

Grocery.hasMany(Food, {
  foreignKey: "food_id",
});

Grocery.hasMany(Recipe, {
  foreignKey: "recipe_id",
});

Grocery.belongsTo(Fridge, {
  foreignKey: "fridge_id",
});

//=================================

// Food has...
Food.belongsTo(User, {
  foreignKey: "user_id",
});

Food.belongsTo(Fridge, {
  foreignKey: "fridge_id",
});

Food.hasMany(Recipe, {
  foreignKey: "recipe_id",
});

Food.belongsTo(Grocery, {
  foreignKey: "grocery_id",
});

module.exports = { User, Recipe, Fridge, Grocery, Food };
