const { TooManyRequests } = require("http-errors");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema ({
  content: {
    type: String,
    max: 5000,
    min: 1,
    Default: ""
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    max: 250,
    min: 5,
    default: "Untitled"
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  articleBody: {
    type: String,
    max: 10000,
    min: 1,
    default: ""
  },
  link: {
    type: String,
    required: false,
  },
  comments: {
    type: [commentSchema]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Post", postSchema);