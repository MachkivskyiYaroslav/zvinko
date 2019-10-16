const router = require('express').Router();
const addPhoto= require('../controllers/slider/addSliderPhotos');
const getPhoto= require('../controllers/slider/getSliderPhotos');
const deleteAll= require('../controllers/slider/deletAll');
const deleteSliderPhoto= require('../controllers/slider/deleteSliderPhotos');
const updateSliderPhoto= require('../controllers/slider/updateSliderPhoto');
router.post('/administration/slider/addPhoto',addPhoto);
router.get('/administration/slider/getPhoto', getPhoto);
router.get('/delete',deleteAll);
router.post('/administration/slider/deleteById',deleteSliderPhoto);
router.post('/administration/slider/update',updateSliderPhoto);
module.exports= router;
