const router = require("express").Router();
const { Recipe } = require("../../models");
const withAuth = require("../../utils/auth");

// find all recipes
router.get("/", async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(recipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

// find recipe via id
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, {
      include: [{ model: Recipe, attributes: ["name"] }],
    });

    if (!recipe) {
      res.status(404).json({ message: "Nothing found with this id" });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new recipe
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newRecipe = await Recipe.create({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete recipe (unused)
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: "No recipe found with this id!" });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
