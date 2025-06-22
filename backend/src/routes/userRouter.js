const express = require("express");
const {
  viewPurchasedCourses,
  userSignup,
  userLogin,
} = require("../controllers/user");

const userRouter = express.Router();

userRouter.route("/login").get(userLogin);
userRouter.route("/signup").post(userSignup);
userRouter.route("/purchases").get(viewPurchasedCourses);

module.exports = userRouter;
