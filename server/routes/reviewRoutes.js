const express = require("express");
const router = express.Router();

const {
  addReview,
  getReviewsByDestination
} = require("../controllers/reviewController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, addReview);
router.get("/:id", getReviewsByDestination);

module.exports = router;
