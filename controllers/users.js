const User = require("../models/User");
module.exports = {
  index,
  update,
  show,
  edit,
};
// Index w/ redirect for new Users
function index(req, res) {
  User.find({}, function (err, users) {
    if (req.user.newLogin === true) {
      res.redirect("/users/edit");
    } else {
      res.render("users/index", {
        title: "Index of Players",
        users,
      });
    }
  });
}
// show a single user profile
function show(req, res) {
  User.findById(req.params.id, function (err, user) {
    console.log(user.id, req.user.id);
    const isMyUser = user.id === req.user.id;
    console.log(isMyUser);
    res.render("users/show", {
      title: "User Profile",
      user,
      isMyUser,
    });
  });
}
// Update a user profile
function update(req, res) {
  console.log("Update");
  User.findById(req.params.id, function (err, user) {
    if (req.body.username) {
      user.username = req.body.username;
    } else {
      user.username = req.body.email;
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.newLogin = false;
    user.save(function (err) {
      console.log(user);
      res.redirect(`/users/${user._id}`);
    });
  });
}
// render edit user profile screen
function edit(req, res) {
  res.render("users/edit", {
    title: "Update your Profile!",
    user: req.user,
  });
}