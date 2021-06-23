const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  likes: {
    type: Array,
  },
});

module.exports = mongoose.model("Post", postSchema);
