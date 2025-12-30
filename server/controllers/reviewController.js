const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  try {
    const { destinationId, rating, comment } = req.body;

    // 🔴 DEBUG LOG (VERY IMPORTANT)
    console.log("BODY:", req.body);
    console.log("USER:", req.user?._id);

    if (!destinationId || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({
      user: req.user._id,
      destination: destinationId,
      rating: Number(rating), // ensure number
      comment
    });

    res.status(201).json(review);
  } catch (error) {
    console.error("Review Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getReviewsByDestination = async (req, res) => {
  try {
    const reviews = await Review.find({
      destination: req.params.id
    }).populate("user", "email");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};
