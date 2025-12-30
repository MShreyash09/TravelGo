const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/admin");

const {
  getDestinations,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination
} = require("../controllers/destinationController");

// PUBLIC
router.get("/", getDestinations);
router.get("/:id", getDestinationById);

// ADMIN ONLY
router.post("/", auth, admin, addDestination);
router.put("/:id", auth, admin, updateDestination);
router.delete("/:id", auth, admin, deleteDestination);

module.exports = router;
