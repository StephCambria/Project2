const router = require('express').Router();
const { Grocery } = require('../../models');
const withAuth = require('../../utils/auth');

// find all groceries
router.get("/", async (req, res) => {
  try {
    const grocery = await Grocery.findAll({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(grocery)
  } catch (err) {
    res.status(400).json(err);
  }
});

// find groceries via id
router.get("/:id", async (req, res) => {
  try {
    const grocery = await Grocery.findByPk(req.params.id, {
      include: [{ model: Grocery, 
      attributes: ['name'], }]
    });

    if (!grocery) {
      res.status(404).json({ message: "Nothing found with this id" });
    }
    res.status(200).json(grocery);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new grocery
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

    try {
      const newGrocery = await Grocery.create({
        ...body,
        user_id: req.session.user_id,
      });

      res.json(newGrocery)
    } catch (err) {
      res.status(400).json(err);
    }
  });


// delete grocery (unused)
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const groceryData = await Grocery.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!groceryData) {
        res.status(404).json({ message: 'No groceries found with this id!' });
        return;
      }
  
      res.status(200).json(groceryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;