const mongoose = require('mongoose');
const photoSchema = mongoose.Schema({
    url: String,
    alt: String,
    title: String,
    link: String,

});
module.exports= mongoose.model('photo', photoSchema, 'photos');
