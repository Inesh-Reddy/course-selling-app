const express = require("express");
const userRouter = require("./routes/userRouter");
const courseRouter = require("./routes/courseRouter");
const adminRouter = require("./routes/adminRouter");
const app = express();
app.use(express.json());

app.use("/api/v1/users/", userRouter);
app.use("/api/v1/courses/", courseRouter);
app.use("/api/v1/admin/", adminRouter);

app.listen(3000, () => {
  console.log("Server is listening on port : 3000...");
});
