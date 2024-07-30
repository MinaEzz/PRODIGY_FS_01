const express = require("express");
const router = express.Router();
const protectedRoute = require("../middlewares/protectedRoute");
const {
  getUserProfile,
  updateUser,
} = require("../controllers/user.controller");

router.route("/profile/:username").get(protectedRoute, getUserProfile);
router.route("/update").patch(protectedRoute, updateUser);

module.exports = router;
