const express = require('express');
const { purchaseCourse, viewAllCourse } = require('../controllers/courses');
const courseRouter = express.Router();

courseRouter.route('/purchase').post(purchaseCourse)
courseRouter.route('/preview').get(viewAllCourse);


module.exports = courseRouter;