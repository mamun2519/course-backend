const express = require("express");
const {
  createCourse,
  getAllCourse,
  getCourseDetels,
  updateCourser,
  deleteCourse,
  myActiveCourses,
  generateCuponCode,
} = require("../controler/coursesControler");

const router = express.Router();

router.post("/course", createCourse);
// router.post("/course/generate-discount-code", generateCuponCode);
router.get("/course", getAllCourse);
router.get("/course/:id", getCourseDetels);
router.put("/course/:id", updateCourser);
router.delete("/course/:id", deleteCourse);
router.get("/myCourses/:email", myActiveCourses);

module.exports = router;
