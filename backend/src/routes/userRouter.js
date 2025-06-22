const express = require('express');
const {  viewPurchasedCourses } = require('../controllers/user');
const userRouter = express.Router();

userRouter.route('/purchases').get(viewPurchasedCourses);

module.exports = userRouter;