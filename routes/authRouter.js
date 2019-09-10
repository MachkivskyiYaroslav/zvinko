const router = require('express').Router();

let authUser = require('../controllers/users/authUser');

router.post('/login', authUser);

module.exports= router;
