const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  //Try/Catch for RESTFul
  try {
    const category = await Category.findAll();

    res.status(200).json(category);

  } catch (err) {

    res.status(500).json(err);

  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.status(404).json ({ message: "That category does not exist." });
      return;
    }

    res.status(200).json(category);

  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {

    const category = await Category.create({
      category_name: req.body.category_name
    })

    res.status(200).json(category);

  } catch (err) {
    res.status(500).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {

  } catch (err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
