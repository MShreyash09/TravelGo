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
  try {
    const destinationData = { ...req.body };

    if (req.files && req.files.length > 0) {
      destinationData.images = req.files.map(file => `/uploads/${file.filename}`);
    } else {
      destinationData.images = [];
    }

    const destination = new Destination(destinationData);
    await destination.save();
    res.json({ message: "Destination added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// UPDATE (ADMIN)
exports.updateDestination = async (req, res) => {
  try {
    const destinationData = { ...req.body };

    if (req.files && req.files.length > 0) {
      destinationData.images = req.files.map(file => `/uploads/${file.filename}`);
    }

    await Destination.findByIdAndUpdate(req.params.id, destinationData);
    res.json({ message: "Destination updated" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// DELETE (ADMIN)
exports.deleteDestination = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ message: "Destination deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
