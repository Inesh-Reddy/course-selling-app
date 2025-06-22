const express = require("express");
const { viewPurchasedCourses } = require("../controllers/user");
const userLogin = require("../middleware/user");

const userRouter = express.Router();

userRouter.route("/purchases").get(userLogin, viewPurchasedCourses);

module.exports = userRouter;
