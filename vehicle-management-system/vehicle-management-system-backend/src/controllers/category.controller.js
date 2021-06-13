const Category = require("../models/category.model");

const createCategory = async (req, res) => {
  if (req.body) {
    const category = new Category(req.body);
    await category
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const deleteCategoryByid = async (req, res) => {
  if (req.body) {
    await Category.findByIdAndDelete(req.body.id)
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllCategories = async (req, res) => {
  await Category.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategoryByid,
};
