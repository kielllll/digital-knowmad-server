// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// express instance
const app = express();

// Environment variables
const connectionString = process.env.DB_CONNECTION_STRING;
const port = process.env.PORT || 3000;

// Misc setup
// handle JSON objects from requests
app.use(express.json());
app.use(cors());

// Establish a connection to MongoDB Atlas
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose.connect(connectionString, options);
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error: ")
);
mongoose.connection.once("open", () =>
  console.log("Database connection established")
);

// Routes
// root
app.get("/", (req, res) => {
  res.json({
    message: "The Course Booking System API",
  });
});

app.listen(port, () =>
  console.log(`Application server is running at http://localhost:${port}`)
);
