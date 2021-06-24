const Post = require("../models/Post");

module.exports = {
  create,
  delete: deleteComment,
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

// function deleteComment(req, res) {
//   Post.findById(req.params.id, function (err, post) {
//     post.coments.pull({})
//   });
//   post.save(function (err) {
//     res.redirect(`/posts/${post._id}`)
//   })
// }

function deleteComment(req, res) {
  Post.comments.deleteOne({ _id: req.params.id }, function (err) {
    res.redirect(`/posts/${post._id}`);
  });
}