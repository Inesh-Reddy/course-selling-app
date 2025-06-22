const express = require("express");
const {
  adminAddCourse,
  adminDeleteCourse,
  adminLogin,
  adminSignUp,
} = require("../controllers/admin");
const adminRouter = express.Router();

adminRouter.route("/login").get(adminLogin);
adminRouter.route("/signup").post(adminSignUp);
adminRouter.route("/").post(adminAddCourse).delete(adminDeleteCourse);

module.exports = adminRouter;
