const User = require('../models/user');

module.exports = {
    index,
}

function index(req, res) {
    User.find({}, function(err, users) {
        console.log(req.use);
        res.render('users/index', {
            title: "All Users",
            users
        })
    })
}