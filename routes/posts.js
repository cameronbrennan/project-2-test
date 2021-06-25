var router = require("express").Router();
const passport = require("passport");
const postsCtrl = require("../controllers/posts");
// All of these routes live under /posts
router.get("/", isLoggedIn, postsCtrl.index);
router.get("/:id/edit", isLoggedIn, postsCtrl.edit);
router.get("/new", isLoggedIn, postsCtrl.new);
router.post("/", isLoggedIn, postsCtrl.create);
router.put("/:id", isLoggedIn, postsCtrl.update);
router.get("/:id", isLoggedIn, postsCtrl.show);
router.delete("/:id", isLoggedIn, postsCtrl.delete);
function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
module.exports = router;