const Destination = require("../models/Destination");

// GET ALL DESTINATIONS
exports.getDestinations = async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
};

// GET SINGLE DESTINATION (DETAIL PAGE)
exports.getDestinationById = async (req, res) => {
  const destination = await Destination.findById(req.params.id);

  if (!destination) {
    return res.status(404).json({ message: "Destination not found" });
  }

  res.json(destination);
};

// ADD (ADMIN)
exports.addDestination = async (req, res) => {
  const destination = new Destination(req.body);
  await destination.save();
  res.json({ message: "Destination added" });
};

// UPDATE (ADMIN)
exports.updateDestination = async (req, res) => {
  await Destination.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Destination updated" });
};

// DELETE (ADMIN)
exports.deleteDestination = async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: "Destination deleted" });
};
