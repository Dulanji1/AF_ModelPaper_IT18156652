const Vehicle = require("../models/vehicle.model");

const createVehicle = async (req, res) => {
  if (req.body) {
    const vehicle = new Vehicle(req.body);
    await vehicle
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllVehicles = async (req, res) => {
  await Vehicle.find({})
    .populate("categories", "name amount")
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const getCategoriesForVehicle = async (req, res) => {
  if (req.body) {
    await Vehicle.findById({ _id: req.body.id })
      .populate("categories", "name amount")
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getVehiclesForCategoryID = async (req, res) => {
  if (req.params && req.params.id) {
    await Vehicle.find({ categories: req.params.id })
      .then((data) => {
        res.status(200).send({ vehicles: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const calculateAmount = async (req, res) => {
  if (req.body) {
    const vehicle = await Vehicle.findById(req.body.id).populate(
      "categories",
      "name amount"
    );

    let amount;
    vehicle.categories.forEach((item) => {
      if (item._id == req.body.type) {
        amount = item.amount;
      }
    });

    const duration = req.body.duration;

    let totalAmount = 0;

    totalAmount = amount + duration * 800;
    res.status(200).send({ totalAmount: totalAmount });
  }
};

module.exports = {
  createVehicle,
  getAllVehicles,
  calculateAmount,
  getVehiclesForCategoryID,
  getCategoriesForVehicle,
};
