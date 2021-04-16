// Dependencies
const express = require("express");
const cors = require("cors");

// express instance
const app = express();

// Environment variables

// Misc setup
app.use(express.json()); // handle JSON objects from requests
app.use(cors());

// Routes
// root
app.get("/", (req, res) => {
  res.json({
    message: "The Course Booking System API",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Application server is running at http://localhost:${port}`)
);
