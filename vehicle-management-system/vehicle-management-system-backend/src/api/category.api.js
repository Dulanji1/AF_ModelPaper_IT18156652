const express = require("express");
const router = express.Router();
const controller = require("../controllers/category.controller");

module.exports = function () {
  router.post("/create", controller.createCategory);
  router.get("/", controller.getAllCategories);
  router.delete("/delete", controller.deleteCategoryByid);

  return router;
};
