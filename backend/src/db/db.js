const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UsersSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: { type: ObjectId, required: true, ref: "admin" },
});

const purchaseSchema = new Schema({
  userId: { type: ObjectId, required: true, ref: "user" },
  courseId: { type: ObjectId, required: true, ref: "course" },
});

const userModel = mongoose.model("user", UsersSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
