// Course route
const express = require("express");
const router = express.Router();

// Main Route
router.get("/", (req, res) => res.send("GET /api/courses"));

module.exports = router;
