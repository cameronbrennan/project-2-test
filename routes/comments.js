var router = require('express').Router();
const passport = require('passport');
const commentsCtrl = require("../controllers/comments");


router.post('/posts/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/posts/:id/comments/:id', isLoggedIn, commentsCtrl.delete)

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}


module.exports = router;