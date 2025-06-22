const bcrypt = require("bcrypt");
const saltRounds = 10;
const { adminModel } = require("../../db/db");

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({ msg: "Wrong credentials" });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (match) {
      res.status(200).json({ msg: "Login successful" });
    } else {
      res.status(401).json({ msg: "Wrong credentials" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

const adminSignUp = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const existingAdmin = await adminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res
          .status(500)
          .json({ msg: "Error hashing password", error: err.message });
      }

      const newAdmin = await adminModel.create({
        email,
        password: hash,
        firstName,
        lastName,
      });

      res.status(201).json({
        msg: "Admin created successfully",
        admin: newAdmin,
      });
    });
  } catch (error) {
    res.status(500).json({ msg: "Signup failed", error: error.message });
  }
};

const adminDeleteCourse = (req, res) => {
  res.send("Admin deleted course");
};

const adminAddCourse = (req, res) => {
  res.send("Admin adding courses");
};

module.exports = {
  adminLogin,
  adminSignUp,
  adminAddCourse,
  adminDeleteCourse,
};
