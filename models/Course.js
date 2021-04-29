// Course model
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  isActive: {
    type: Boolean,
    default: true,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
  enrollees: [
    {
      userId: String,
      enrolledOn: {
        type: Date,
        default: new Date(),
      },
      status: {
        type: String,
        default: "active",
      },
    },
  ],
});

module.exports = mongoose.model("course", courseSchema);
