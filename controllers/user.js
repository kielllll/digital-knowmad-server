// Dependencies
const bcrypt = require("bcrypt");

// User controller
const User = require("../models/User");

// Create a new user
module.exports.register = ({
  firstName,
  lastName,
  emailAddress,
  password,
  mobileNumber,
}) => {
  let hashedPassword = bcrypt.hashSync(password, 10);

  let newUser = new User({
    firstName,
    lastName,
    emailAddress,
    password: hashedPassword,
    mobileNumber,
  });

  return newUser.save().then((user, err) => {
    return err ? false : true;
  });
};

// Retrieve all users

// Retrieve a specific user by ID

// Update a user details

// Delete an existing user
