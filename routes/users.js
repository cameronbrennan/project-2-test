var router = require('express').Router();
const passport = require('passport');
const usersCtrl = require('../controllers/users')

router.get('/', usersCtrl.index)


module.exports = router;