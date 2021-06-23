const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema ({
  content: {
    type: String,
    max: 500,
    min: 1,
    Default: ""
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  }
});

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
    required: true,
  },
  articleBody: {
    type: String,
    max: 2500,
    min: 1,
    default: ""
  },
  description: {
    type: String,
  },
  comments: {
    type: [commentSchema]
  },
  likes: {
    type: Array,
  },
});

module.exports = mongoose.model("Post", postSchema);
