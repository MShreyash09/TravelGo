const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    const { destinationId, amount } = req.body;

    if (!destinationId || !amount) {
      return res.status(400).json({ message: "Missing payment data" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "TravelGo Destination Booking"
            },
            unit_amount: amount * 100 // rupees → paise
          },
          quantity: 1
        }
      ],
      success_url: "http://localhost:5173/payment-success",
      cancel_url: "http://localhost:5173/payment-cancel"
    });

    console.log("Stripe key loaded:", process.env.STRIPE_SECRET_KEY ? "YES" : "NO");


    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Payment failed" });
  }
};

module.exports = { createCheckoutSession };
