var router = require("express").Router();
const passport = require("passport");
const postsCtrl = require("../controllers/posts");

router.get("/", isLoggedIn, postsCtrl.index);
router.get("/edit", isLoggedIn, postsCtrl.edit);
router.get("/new", isLoggedIn, postsCtrl.new);
router.put("/:id", isLoggedIn, postsCtrl.update);
router.get("/:id", isLoggedIn, postsCtrl.show);
router.delete("/:id", isLoggedIn, postsCtrl.delete);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;