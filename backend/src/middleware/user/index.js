const userLogin = (req, res, next) => {
  if (!true) {
    res.send("userLogin");
  }
  console.log("login middleware  reacehd");
  next();
};

// const userSignup = (req, res, next) => {
//   if (!true) {
//     res.send("user signup");
//   }
//   next();
// };

module.exports = userLogin;
// module.exports = {
//   userLogin,
//   //   userSignup,
// };
