const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  code: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "categories",
    },
  ],
});

const Vehicle = mongoose.model("vehicles", VehicleSchema);
module.exports = Vehicle;
