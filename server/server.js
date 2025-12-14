require("dotenv").config({ path: "./.env" });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/destinations", require("./routes/destinationRoutes"));

app.get("/", (req, res) => {
  res.send("TravelGo Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
