router.post("/verify", auth, async (req, res) => {
  const { sessionId, destinationId, amount } = req.body;

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const payment = new Payment({
    userId: req.user.id,
    destinationId,
    amount,
    currency: session.currency,
    paymentIntentId: session.payment_intent,
    status: session.payment_status
  });

  await payment.save();
  res.json({ success: true });
});
