const mongoose = require("mongoose");
const { Schema } = mongoose;

const multiplication = new Schema({
  problem: { type: String, required: true },
  answer: { type: Number, required: true },
  //need to add space for items that they've bought with currency
});

const Inventory = mongoose.model("Multiplication", multiplication);
module.exports = Inventory;
