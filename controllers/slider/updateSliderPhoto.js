const slider= require('../../dataBase/models/sliderModel');
const ControllerError = require('../../error/ControllerError');
const mongoose = require('mongoose');
module.exports = async (req,res,next) => {
    let photoInfo = {
        _id: String,
        title: String,
        alt: String,
        link: String,
        url: String
    };
        try {
            photoInfo=req.body;
            await slider.findOne({_id: mongoose.Types.ObjectId(photoInfo._id)}, (err,result) => {
                if(err){
                    console.log(err);
                }else{
                    photoInfo=result;
                    console.log(photoInfo);
                }
            }).then(slider.updateOne({_id: mongoose.Types.ObjectId(photoInfo._id)}, {
                    title: photoInfo.title,
                    link: photoInfo.link
            }, (err,result) => {
                if(err){
                    console.log(err)
                }else{
                    console.log(result);
                    res.status(200).send(result);
                }
            }));
        }catch (e) {
            next(new ControllerError(e.message, e.status, 'deleteSliderPhotos'));
        }
};
