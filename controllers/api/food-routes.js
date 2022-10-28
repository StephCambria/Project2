const router = require('express').Router();
const { Food } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  
  try {
    const newFood = await Food.create({
      ...body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFood)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const foodData = await Food.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!foodData) {
      res.status(404).json({ message: 'Nothing found with this id!' });
      return;
    }

    res.status(200).json(foodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;