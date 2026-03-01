const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/admin");
const upload = require("../middleware/upload");

const {
  getDestinations,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination
} = require("../controllers/destinationController");

// PUBLIC ROUTES
router.get("/", getDestinations);
router.get("/:id", getDestinationById);

// ADMIN ROUTES
router.post(
  "/",
  auth,
  admin,
  upload.array("images", 5), // ✅ SINGLE SOURCE OF TRUTH
  addDestination
);

router.put("/:id", auth, admin, updateDestination);
router.delete("/:id", auth, admin, deleteDestination);

module.exports = router;
