const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

  Category.findAll({
    include: [Product]
  }).then((categoryData) => {
    res.status(200).json(categoryData)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Product]
  }).then((categoryId) => {
    res.status(200).json(categoryId);
  }).catch((err) => {
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => {
    res.status(200).json(newCategory);
  }).catch((err) => {
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  Category.update(
    req.body, {
      where: {
        id: req.params.id,
      }
    }).then((categoryData) => {
      res.status(200).json(categoryData);
    }).catch((err) => {
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((deleteCategory) => {
    res.status(200).json(deleteCategory);
  }).catch((err) => {
    res.status(500).json(err);
  })
});

module.exports = router;
