const Fridge = require("../models/Fridge");

const fridgeData =

[
    {
        "name": "Eggs",
        "amount": "11"
    },
    {
        "name": "Apples",
        "amount":  "4"
    },
    {
        "name": "Oranges",
        "amount": "7"
    },
    {
        "name": "Milk",
        "amount": "1"
    },
    {
        "name": "Butter",
        "amount": "1/2"
    },
    {
        "name": "Lettuce",
        "amount": "1"
    }
]

const seedFridge = () => Fridge.bulkCreate(fridgeData);

module.exports = seedFridge;