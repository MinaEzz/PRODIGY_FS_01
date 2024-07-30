const User = require("../models/user.model");
const { SUCCESS, ERROR, FAIL } = require("../utils/httpStatusText");
const bcrypt = require("bcrypt");

const getUserProfile = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username: username }).select("-password");
    if (!user) {
      const error = new Error("User not found");
      error.status = NOT_FOUND;
      error.code = 404;
      return next(error);
    }
    res.status(200).json({ status: SUCCESS, data: { user } });
  } catch (err) {
    const error = new Error(err.message || "Error fetching user profile");
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  const userId = req.user._id;
  const { username, email, currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("User not found");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    if (currentPassword && !newPassword) {
      const error = new Error("Please provide new password");
      error.status = FAIL;
      error.code = 400;
      return next(error);
    }
    if (!currentPassword && newPassword) {
      const error = new Error("Please provide current password");
      error.status = FAIL;
      error.code = 400;
      return next(error);
    }
    if (currentPassword && newPassword) {
      const isPasswordCorrect = await bcrypt.compare(
        currentPassword,
        user.password
      );
      if (!isPasswordCorrect) {
        const error = new Error("Incorrect current password");
        error.status = FAIL;
        error.code = 401;
        return next(error);
      }
      if (newPassword.length < 6) {
        const error = new Error(
          "Password should be at least 6 characters long"
        );
        error.status = FAIL;
        error.code = 400;
        return next(error);
      }
      const hashedNewPassword = await bcrypt.hash(newPassword, 12);
      user.password = hashedNewPassword;
    }
    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();
    res.status(200).json({ status: SUCCESS, data: { user } });
  } catch (err) {
    const error = new Error(err.message || "Error updating user");
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};
module.exports = { getUserProfile, updateUser };
