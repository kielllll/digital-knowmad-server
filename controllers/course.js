const Course = require("../models/Course");

// Retrieve all courses
module.exports.getAll = () => {
  return Course.find({}).then((courses) => courses);
};

// Retrieve a specific course
module.exports.getCourseDetails = (id) => {
  return Course.findById(id).then((course) => course);
};
