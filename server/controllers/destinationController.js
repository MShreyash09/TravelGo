const Destination = require("../models/Destination");

// GET
exports.getDestinations = async (req, res) => {
  const data = await Destination.find();
  res.json(data);
};

// POST
exports.addDestination = async (req, res) => {
  const destination = new Destination(req.body);
  await destination.save();
  res.json({ message: "Destination added" });
};


