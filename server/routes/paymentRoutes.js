const express = require("express");
const Stripe = require("stripe");
const Payment = require("../models/payment");
const auth = require("../middleware/auth");

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const authMiddleware = require("../middleware/auth");
const { createCheckoutSession } = require("../controllers/paymentController");

router.post(
  "/create-checkout-session",
  authMiddleware,
  createCheckoutSession
);


router.post("/create-checkout-session", auth, async (req, res) => {
  const { destinationId, amount } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [{
      price_data: {
        currency: "inr",
        product_data: { name: "Travel Destination" },
        unit_amount: amount * 100
      },
      quantity: 1
    }],
    success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/payment-cancel`
  });

  res.json({ url: session.url });
});

module.exports = router;
