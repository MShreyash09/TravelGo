const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  createContact,
  getAllContacts,
  approveContact
} = require("../controllers/contactController");

// USER
router.post("/", auth, createContact);

// ADMIN
router.get("/", auth, admin, getAllContacts);
router.put("/approve/:id", auth, admin, approveContact);

console.log(createContact);


module.exports = router;
