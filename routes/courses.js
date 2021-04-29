// Course route
const express = require("express");
const router = express.Router();

// Controllers
const CourseController = require("../controllers/course");

// Main Route
router.get("/", (req, res) => {
  if (req.query.id) {
    CourseController.getCourseDetails(req.query.id).then((course) =>
      res.send({ course })
    );
  } else {
    CourseController.getAll().then((courses) => res.send({ courses }));
  }
});

module.exports = router;
