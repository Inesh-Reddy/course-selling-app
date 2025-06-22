const adminLogin = (req, res, next) => {
  //   res.json({
  //     msg: "Admin Login",
  //   });
  console.log("Reached admin middleware");
  next();
};

const adminSignUp = (req, res, next) => {
  res.json({
    mag: "Admin SignUP",
  });
  next();
};

module.exports = {
  adminLogin,
  adminSignUp,
};
