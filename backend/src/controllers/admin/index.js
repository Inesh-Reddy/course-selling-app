const adminModel = require("../../db/db");
const adminDeleteCourse = (req, res) => {
  res.send("Admin deleted course");
};

const adminAddCourse = (req, res) => {
  res.send("Admin adding courses");
};

module.exports = {
  adminAddCourse,
  adminDeleteCourse,
};
