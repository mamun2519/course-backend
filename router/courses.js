const express = require("express");
const {
  createCourse,
  getAllCourse,
  getCourseDetels,
  updateCourser,
  deleteCourse,
  myActiveCourses,
  generateCuponCode,
  getAllPromoCode,
  validatePromo,
  deleteCouponCode,
  appCreateCourse
} = require("../controler/coursesControler");

// router model
const router = express.Router();

router.post("/course", createCourse);
router.post("/course/app", appCreateCourse);
router.post("/course/generate-discount-code/:amount", generateCuponCode);
router.delete("/course/delete-discount-code/:id", deleteCouponCode);
router.post("/course/validatePromo/:code", validatePromo);
router.get("/course", getAllCourse);
router.get("/course/getAllPromoCode", getAllPromoCode);
router.get("/course/:id", getCourseDetels);
router.put("/course/:id", updateCourser);
router.delete("/course/:id", deleteCourse);
router.get("/myCourses/:email", myActiveCourses);

module.exports = router;
