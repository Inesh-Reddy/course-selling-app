const express = require('express');
const { adminAddCourse, adminDeleteCourse } = require('../controllers/admin');
const adminRouter = express.Router();

adminRouter.route('/').post(adminAddCourse).delete(adminDeleteCourse);

module.exports = adminRouter;