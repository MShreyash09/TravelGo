const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  location: String,
  duration: String,
  description: String,
  price: Number,

  images: [String], // 👈 MULTIPLE IMAGES

}, { timestamps: true });

module.exports = mongoose.model("Destination", destinationSchema);
