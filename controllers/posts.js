const Post = require("../models/Post");

module.exports = {
  index,
  show,
  new: newPost,
  edit,
  update,
  delete: deletePost,
};

// index of all posts
function index(req, res) {
  Post.find({}, function (err, posts) {
    res.render("posts/index", {
      title: "All Posts",
      posts,
    });
  });
}
// get a single post
function show(req, res) {
  Post.findById(req.params.id, function (err, post) {
    res.render("posts/show", {
      title: "Post Details",
      post,
    });
  });
}
// create a post
function newPost(req, res) {
    res.render('posts/new');
}
// edit an existing post
function edit(req, res) {
    res.render("posts/edit", {
      title: "Update your Post",
      user: req.user
    });
  }
// update a post
function update(req, res) {
    console.log("Update");
    Post.findById(req.params.id, function (err, post) {
      
      post.save(function (err) {
        res.redirect(`/posts/${post._id}`);
      });
    });
  }
// delete a post
function deletePost(req, res) {
    Post.deleteOne(req.params.id);
    res.redirect('/posts');
}
