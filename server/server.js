require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const connectDB = require("./config/db");
connectDB();


// middleware
app.use(cors());
app.use(express.json());

app.use("/api/destinations", require("./routes/destinationRoutes"));



// test route
app.get("/", (req, res) => {
  res.send("TravelGo Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
