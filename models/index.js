const User = require('./User');
const Recipe = require('./Recipe');
const Food = require('./Food');

Food.hasMany(Recipe, {
    foreignKey: 'recipe_id'
});

Recipe.belongsTo(Food, {
    foreignKey: 'food_id'
});

module.exports = { User, Recipe, Food };
