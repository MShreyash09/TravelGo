// server/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { register, login, me } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

// keep both endpoints to be compatible with different frontends
router.post("/signup", register);
router.post("/register", register); // optional alias
router.post("/login", login);
router.get("/me", protect, me);

module.exports = router;
