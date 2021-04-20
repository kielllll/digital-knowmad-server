// User route
const express = require("express");
const router = express.Router();

// Controllers
const UserController = require("../controllers/user");

/**
 * Primary user routes
 * root: /api/users
 */

// Create a new user
router.post("/register", (req, res) => {
  UserController.register(req.body).then((result) => {
    res.json({
      message: "New user has been created",
      data: result,
    });
  });
});

// Retrieve all users
// router.get();

// Retrieve a specific user by ID
// router.get();

// Update a user details
// router.put();

// Delete an existing user
// router.delete();

module.exports = router;
