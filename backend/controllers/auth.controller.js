const User = require("../models/user.model");
const { SUCCESS, ERROR, FAIL } = require("../utils/httpStatusText");
const bcrypt = require("bcrypt");
const generateTokenAndSetCookie = require("../utils/generateToken");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  try {
    if (!emailRegex.test(email)) {
      const error = new Error("Invalid email address");
      error.status = FAIL;
      error.code = 400;
      return next(error);
    }
    const existingUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (existingUser) {
      const error = new Error("User already exists");
      error.status = FAIL;
      error.code = 409;
      return next(error);
    }
    if (password.length < 6) {
      const error = new Error("Password must be at least 6 characters long");
      error.status = FAIL;
      error.code = 400;
      return next(error);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    if (!hashedPassword) {
      const error = new Error("Couldn't Create User, Please Try Again.");
      error.status = FAIL;
      error.code = 500;
      return next(error);
    }
    const newUser = new User({ username, email, password: hashedPassword });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        status: SUCCESS,
        data: { user: { username: newUser.username, email: newUser.email } },
        message: "User Created Successfully!",
      });
    } else {
      const error = new Error("Couldn't Create User, Please Try Again.");
      error.status = FAIL;
      error.code = 400;
      return next(error);
    }
  } catch (err) {
    const error = new Error(err.message || "Error in signup!");
    error.code = 500;
    error.status = ERROR;
    return next(error);
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      const error = new Error("User not found");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    const isMatch = await bcrypt.compare(password, user.password || "");
    if (!isMatch) {
      const error = new Error("Invalid credentials");
      error.status = FAIL;
      error.code = 401;
      return next(error);
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      status: SUCCESS,
      data: { user: { username: user.username, email: user.email } },
      message: "Login successfully!",
    });
  } catch (err) {
    const error = new Error(err.message || "Error in login!");
    error.code = 500;
    error.status = ERROR;
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      status: SUCCESS,
      data: null,
      message: "Logged out successfully!",
    });
  } catch (err) {
    const error = new Error(err.message || "Error in logout!");
    error.code = 500;
    error.status = ERROR;
    return next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      const error = new Error("User not found");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    res.status(200).json({
      status: SUCCESS,
      data: { user },
      message: "User fetched successfully!",
    });
  } catch (err) {
    const error = new Error(err.message || "Error in fetching user!");
    error.code = 500;
    error.status = ERROR;
    return next(error);
  }
};

module.exports = { signup, login, logout, getMe };
