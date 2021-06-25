var router = require("express").Router();
const passport = require("passport");
const usersCtrl = require("../controllers/users");
// all of these routes live under /users
router.get("/", isLoggedIn, usersCtrl.index);
router.get("/edit", isLoggedIn, usersCtrl.edit);
router.put("/:id", isLoggedIn, usersCtrl.update);
router.get("/:id", isLoggedIn, usersCtrl.show);
function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
module.exports = router;
