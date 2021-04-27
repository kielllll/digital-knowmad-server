// User model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  mobileNumber: {
    type: String,
  },
  enrollments: [
    {
      courseId: String,
      enrolledOn: {
        type: Date,
        default: new Date(),
      },
      status: String,
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
