const Post = require("../models/Post");

module.exports = {
  index,
  show,
  new: newPost,
  create,
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
  Post.findById(req.params.id)
    .populate("author comments.author")
    .exec(function (err, post) {
      const isMyPost = post.author.equals(req.user._id);
      const isMyComment = post.comment.author.equals(req.user._id);
      console.log(post);
      res.render("posts/show", {
        title: "Post Details",
        post,
        isMyPost,
        isMyComment
      });
    });
}
// show new post form
function newPost(req, res) {
  res.render("posts/new", {
    title: "Create a New Post",
  });
}
// create new post
function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const postObject = { ...req.body, author: req.user._id };
  const post = new Post(postObject);
  post.save(function (err) {
    console.error(err);
    if (err) return res.redirect("/posts/new");
    res.redirect(`/posts/${post._id}`);
  });
}
// edit an existing post
function edit(req, res) {
  res.render("posts/edit", {
    title: "Update your Post",
    user: req.user,
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
  Post.deleteOne({ _id: req.params.id }, function (err) {
    res.redirect("/posts");
  });
}
