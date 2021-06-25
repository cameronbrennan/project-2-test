const Post = require("../models/Post");
module.exports = {
  create,
};
function create(req, res) {
  Post.findById(req.params.id, function (err, post) {
    post.comments.push({
      content: req.body.content,
      author: req.user._id,
    });
    post.save(function (err) {
      res.redirect(`/posts/${post._id}`);
    });
  });
}