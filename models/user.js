const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 20,
      //unique: true
      default: ""
    },
    name: {
      type: String,
      max: 50,
    },
    email: {
      type: String,
      min: 10,
      max: 150
    },
    googleId: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    newLogin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

// I want the User Model to contain:
// Username
// Profile Pic
// Cover Pic
