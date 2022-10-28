const router = require("express").Router();

const userRoutes = require("./user-routes");
const fridgeRoutes = require("./fridge-routes");
const groceryRoutes = require("./grocery-routes");
const recipeRoutes = require("./recipe-routes");
const foodRoutes = require("./food-routes");
//const { User, Fridge, Grocery, Recipe, Food } = require("../../models");

// User routes
router.use("/user", userRoutes);

router.get("/user", async (req, res) => {
  const users = await User.findAll();
  res.join(users);
});

// Fridge routes
router.use("/fridge", fridgeRoutes);

// Grocery routes
router.use("/grocery", groceryRoutes);


// Recipe routes
router.use("/recipe", recipeRoutes);

// Food routes
router.use("/food", foodRoutes);

module.exports = router;
