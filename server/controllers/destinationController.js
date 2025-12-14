const Destination = require("../models/Destination");

// GET all destinations
exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD destination
exports.addDestination = async (req, res) => {
  try {
    const destination = new Destination(req.body);
    await destination.save();
    res.json({ message: "Destination added successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE destination
exports.updateDestination = async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE destination
exports.deleteDestination = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ message: "Destination deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
