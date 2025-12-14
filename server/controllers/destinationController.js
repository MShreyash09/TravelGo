const Destination = require("../models/Destination");

// USER + ADMIN (VIEW)
exports.getDestinations = async (req, res) => {
  const data = await Destination.find();
  res.json(data);
};

// ADMIN (ADD)
exports.addDestination = async (req, res) => {
  const destination = new Destination(req.body);
  await destination.save();
  res.json({ message: "Destination added" });
};

// ADMIN (UPDATE)
exports.updateDestination = async (req, res) => {
  await Destination.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Destination updated" });
};

// ADMIN (DELETE)
exports.deleteDestination = async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: "Destination deleted" });
};
