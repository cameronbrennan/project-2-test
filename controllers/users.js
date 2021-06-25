const User = require("../models/User");
module.exports = {
  index,
  update,
  show,
  edit,
};
// Remove index - function, replace with edit profile after login
function index(req, res) {
  User.find({}, function (err, users) {
    if (req.user.newLogin === true) {
      res.redirect("/posts");
    } else {
      res.render("users/index", {
        title: "Index of Players",
        users,
      });
    }
  });
}
// show individual user profile
function show(req, res) {
  User.findById(req.params.id, function (err, user) {
    const isMyUser = user.id === req.user.id;
    res.render("users/show", {
      title: "User Profile",
      user,
      isMyUser,
    });
  });
}
// update from edit profile page
function update(req, res) {
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
      res.redirect(`/users/${user._id}`);
    });
  });
}
// direct to edit user page
function edit(req, res) {
  res.render("users/edit", {
    title: "Update your Profile!",
    user: req.user,
  });
}
