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
      required: true
    },
    email: {
      type: String,
      min: 10,
      max: 150,
      required: true
    },
    googleId: {
      type: String,
      required: true
    },
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