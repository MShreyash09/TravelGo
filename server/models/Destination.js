const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  location: String,
  duration: String,
  description: String,
  price: Number,

  images: [String], //  handels multiple images

}, { timestamps: true });

module.exports = mongoose.model("Destination", destinationSchema);
