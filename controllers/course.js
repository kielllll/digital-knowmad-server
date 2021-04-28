const Course = require("../models/Course");

// Retrieve all courses
module.exports.getAll = () => {
  return Course.find({}).then((courses) => courses);
};
