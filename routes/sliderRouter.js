const router = require('express').Router();
const addPhoto= require('../controllers/slider/addSliderPhotos');
const getPhoto= require('../controllers/slider/getSliderPhotos');
router.post('/administration/slider/addPhoto',addPhoto);
router.get('/administration/slider/getPhoto', getPhoto);
module.exports= router;
