// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
connectDB();

//modified cors to only map to live frontend link
app.use(cors({
  origin: "https://simple-travelgo.vercel.app/",
  credentials: true
}));
app.use(express.json());

// auth routes (ensure file name authRoutes.js)
app.use("/api/auth", require("./routes/authRoutes"));

// other routes (keep your existing route requires)
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));

//sarvam translation routes
app.use("/api/translate", require("./routes/translateRoute"));

// serve uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
