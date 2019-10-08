const router = require('express').Router();
const regUser= require('../controllers/users/createUser');
const loginUser= require('../controllers/users/authUser');
const loggedAs= require('../controllers/users/me');
const logOut = require('../controllers/users/logOut');
const logOutAll= require('../controllers/users/logOutAll');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken')
const User = require('../dataBase/models/userModel');
router.post('/user', regUser);
router.post('/user/login', loginUser);
router.get('/user/me',auth);
router.post('/user/me/logout',logOut);
router.post('/user/me/logOutAll', logOutAll);

module.exports=router;
