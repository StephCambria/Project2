const Grocery = require("../models/Fridge");

const groceryData =

[
    {
        "name": "Bread",
        "amount": "1"
    },
    {
        "name": "Banana",
        "amount":  "3"
    },
    {
        "name": "Rice",
        "amount": "3"
    },
    {
        "name": "Pasta",
        "amount": "4"
    },
    {
        "name": "Pancake Mix",
        "amount": "1"
    },
    {
        "name": "Blueberries",
        "amount": "6"
    }
]

const seedGrocery = () => Grocery.bulkCreate(groceryData);

module.exports = seedGrocery;