const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehicle.controller");

module.exports = function () {
  router.post("/create", controller.createVehicle);
  router.get("/", controller.getAllVehicles);
  router.post("/amount", controller.calculateAmount);
  router.get("/:id", controller.getVehiclesForCategoryID);
  router.post("/categories", controller.getCategoriesForVehicle);
  return router;
};
