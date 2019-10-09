const router = require('express').Router();
const addPhoto= require('../controllers/slider/addSliderPhotos');
const getPhoto= require('../controllers/slider/getSliderPhotos');
const deleteAll= require('../controllers/slider/deletAll');
router.post('/administration/slider/addPhoto',addPhoto);
router.get('/administration/slider/getPhoto', getPhoto);
router.get('/delete',deleteAll);
module.exports= router;
