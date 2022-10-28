const User = require("../models/User");

const userData = [
    {
        "username": "scambria",
        "password": "poopy123"
    }
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;