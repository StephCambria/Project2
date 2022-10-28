const router = require("express").Router();
const { Food } = require("../../models");
const withAuth = require("../../utils/auth");

// find all food
router.get("/", async (req, res) => {
  try {
    const food = await Food.findAll({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(food);
  } catch (err) {
    res.status(400).json(err);
  }
});

// find food via id
router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id, {
      include: [{ model: Food, attributes: ["name"] }],
    });

    if (!food) {
      res.status(404).json({ message: "Nothing found with this id" });
    }
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new food
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newFood = await Food.create({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(newFood);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete food (unused)
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const foodData = await Food.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!foodData) {
      res.status(404).json({ message: "Nothing found with this id!" });
      return;
    }

    res.status(200).json(foodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
