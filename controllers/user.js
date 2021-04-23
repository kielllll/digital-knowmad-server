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

// Check if user (email) already exist
module.exports.checkEmail = ({ emailAddress }) => {
  return User.find({ emailAddress }).then((result) => {
    return result.length > 0;
  });
};

// Login a user
module.exports.login = ({ emailAddress, password }) => {
  return User.findOne({ emailAddress }, "password").then((user) => {
    if (!user)
      // User not found
      return false;
    else {
      // Check password
      const isPasswordMatched = bcrypt.compareSync(password, user.password);
      if (isPasswordMatched) {
        let userDetails = user.toObject();
        delete userDetails.password;
        return {
          data: true,
          userDetails,
        };
      } else return { data: false };
    }
  });
};
