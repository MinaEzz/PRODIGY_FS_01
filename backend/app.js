const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectMongoDB = require("./db/connectMongoDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Import Routes
const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");

const { ERROR } = require("./utils/httpStatusText");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_BASE_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

// GLOBAL MIDDLEWARE FOR NOT FOUND ROUTERS
app.all("*", (req, res, next) => {
  const error = new Error("This Resource Is Not Available");
  error.status = ERROR;
  error.code = 404;
  return next(error);
});
// DEFAULT ERROR HANDLER
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    status: error.status || ERROR,
    data: null,
    message: error.message || "Unkown Error Occured.",
    code: error.code || 500,
  });
});
app.listen(port, () => {
  console.log("> Server is up and running on port : " + port);
  connectMongoDB();
});
