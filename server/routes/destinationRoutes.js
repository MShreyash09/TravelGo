const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getDestinations,
  addDestination,
  updateDestination,
  deleteDestination
} = require("../controllers/destinationController");

// USER + ADMIN
router.get("/", getDestinations);

// ADMIN ONLY
router.post("/", auth, admin, addDestination);
router.put("/:id", auth, admin, updateDestination);
router.delete("/:id", auth, admin, deleteDestination);

module.exports = router;
