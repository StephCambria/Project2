const router = require("express").Router();
const { Fridge } = require("../../models");
const withAuth = require("../../utils/auth");


// find all fridge
router.get("/", async (req, res) => {
  try {
    const fridge = await Fridge.findAll({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(fridge)
  } catch (err) {
    res.status(400).json(err);
  }
});

// find fridge via id
router.get("/:id", async (req, res) => {
  try {
    const fridge = await Fridge.findByPk(req.params.id, {
      include: [{ model: Fridge, 
      attributes: ['name'], }]
    });

    if (!fridge) {
      res.status(404).json({ message: "Nothing found with this id" });
      return;
    }
    res.status(200).json(fridge);
  } catch (err) {
    res.status(500).json(err);
  }
})

// create new fridge
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const fridge = await Fridge.create({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(fridge);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete fridge (unused)
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const fridgeData = await Fridge.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!fridgeData) {
      res.status(404).json({ message: "Nothing found with this id!" });
      return;
    }

    res.status(200).json(fridgeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
