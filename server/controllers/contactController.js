const Contact = require("../models/Contact");
const User = require("../models/User");

// USER submits contact form
const createContact = async (req, res) => {
  try {
    const contact = new Contact({
      user: req.user.id,
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      message: req.body.message
    });

    await contact.save();
    res.status(201).json({ message: "Contact request submitted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADMIN views all contact requests
const getAllContacts = async (req, res) => {
  const contacts = await Contact.find().populate("user", "email role");
  res.json(contacts);
};

// ADMIN approves request → promote user
const approveContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  await User.findByIdAndUpdate(contact.user, { role: "admin" });
  res.json({ message: "User promoted to admin" });
};

module.exports = {
  createContact,
  getAllContacts,
  approveContact
};
