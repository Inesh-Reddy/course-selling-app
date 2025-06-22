const bcrypt = require("bcrypt");
const { userModel } = require("../../db/db");
const saltRounds = 10;

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Wrong credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.status(200).json({ msg: "Login successful" });
    } else {
      res.status(401).json({ msg: "Wrong credentials" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

const userSignup = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res
          .status(500)
          .json({ msg: "Error hashing password", error: err.message });
      }

      const newUser = await userModel.create({
        email,
        password: hash,
        firstName,
        lastName,
      });

      res.status(201).json({
        msg: "User created successfully",
        admin: newUser,
      });
    });
  } catch (error) {
    res.status(500).json({ msg: "Signup failed", error: error.message });
  }
};

const viewPurchasedCourses = (req, res) => {
  res.send("View Purchased Courses");
};

module.exports = {
  userLogin,
  userSignup,
  viewPurchasedCourses,
};
