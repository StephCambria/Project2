const router = require("express").Router();

const userRoutes = require("./user-routes");
const fridgeRoutes = require("./fridge-routes");
const groceryRoutes = require("./grocery-routes");
const recipeRoutes = require("./recipe-routes");
const foodRoutes = require("./food-routes");
const { User, Fridge, Grocery, Recipe, Food } = require("../../models");

// User routes
router.use("/user", userRoutes);

router.get("/user", async (req, res) => {
  const users = await User.findAll();
  res.join(users);
});

// Fridge routes
router.use("/fridge", fridgeRoutes);

router.get("/fridge", async (req, res) => {
  const fridge = await Fridge.findAll();
  res.json(fridge);
});

// Grocery routes
router.use("/grocery", groceryRoutes);

router.get("/grocery", async (req, res) => {
  const grocery = await Grocery.findAll();
  res.join(grocery);
});

// Recipe routes
router.use("/recipe", recipeRoutes);

router.get("/recipe", async (req, res) => {
  const recipe = await Recipe.findAll();
  res.join(recipe);
});

// Food routes
router.use("/food", foodRoutes);

router.get("/food", async (req, res) => {
  const food = await Food.findAll();
  res.join(food);
});

module.exports = router;
