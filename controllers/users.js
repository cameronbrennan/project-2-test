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
        res.redirect('/users/edit')
    } else {
      res.render("users/index", {
        title: "Index of Players",
        users,
      });
    }
  });
}

function show(req, res) {
  User.findById(req.params.id, function (err, user) {
      console.log(user.id, req.user.id);
    const isMyUser = (user.id === req.user.id);
    console.log(isMyUser);
    res.render("users/show", {
      title: "User Profile",
      user,
      isMyUser
    });
  });
}

function update(req, res) {
  console.log("Update");
  User.findById(req.params.id, function (err, user) {
    user.username = req.body.username;
    user.name = req.body.name;
    user.email = req.body.email;
    user.newLogin = false;
    user.save(function (err) {
      console.log(user);
      res.redirect(`/users/${user._id}`);
    });
  });
}

function edit(req, res) {
  res.render("users/edit", {
    title: "Update your Profile!",
    user: req.user
  });
}
// Delete a User
// function deleteUser(req,res)=>{}
