const router = require('express').Router();

let regUser= require('../controllers/users/createUser');

router.post('/registration', regUser);
module.exports=router;
