const express = require("express");
const { adminAddCourse, adminDeleteCourse } = require("../controllers/admin");
const { adminLogin } = require("../middleware/admin");
const adminRouter = express.Router();

adminRouter
  .route("/")
  .post(adminLogin, adminAddCourse)
  .delete(adminLogin, adminDeleteCourse);

module.exports = adminRouter;
