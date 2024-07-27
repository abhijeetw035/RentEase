const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const authRoutes = require("./routes/auth");
const listingRoutes = require("./routes/listing");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");

// routes
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

// mongoose setup
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "RentEase",
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });
