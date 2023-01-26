const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({include: [Product]});
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const {id} = req.params;
    const data = await Category.findByPk(id, {include: [Product]});
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const {category_name} = req.body;
    const data = await Category.create({category_name});
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const {category_name} = req.body;
    const {id} = req.params;
    const data = await Category.update({category_name}, {where: {id}});
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const {id} = req.params;
    const data = await Category.destroy({where: {id}});
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
