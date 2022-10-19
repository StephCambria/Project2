const User = require('./User');
const Recipe = require('./Recipe');
const Fridge = require('./Fridge');
const Grocery = require('./Grocery');

Fridge.hasMany(Recipe, {
    foreignKey: 'recipe_id'
});

Recipe.belongsTo(Food, {
    foreignKey: 'food_id'
});

Fridge.hasMany(Grocery, {
    foreignKey: 'grocery_id'
});

module.exports = { User, Recipe, Fridge, Grocery };
