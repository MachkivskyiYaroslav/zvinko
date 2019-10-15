const fileDelete = require('../../helpers/fileDelete');
const slider = require('../../dataBase/models/sliderModel');
const ControllerError = require('../../error/ControllerError');
const mongoose = require('mongoose');
module.exports = async (req, res, next) => {
    let photoInfo = {
        url: String,
        _id: String,
    };
    try {

        photoInfo = req.body;

        await slider.findOne({_id: mongoose.Types.ObjectId(photoInfo._id)}, 'url', (err, result) => {
            if (err) {
                console.log(err)
            } else {
                photoInfo=result;
                console.log(photoInfo);
                console.log(photoInfo.url);
                res.status(200).send(photoInfo);
                // fileDelete(photoInfo.url);
            }
        })
        //     .then(slider.deleteOne({_id: mongoose.Types.ObjectId(photoInfo._id)}, (err, result) => {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         console.log(result);
        //         res.status(200).send(result);
        //     }
        //
        // }));
    } catch (e) {
        console.log(e);
        next(new ControllerError(e.message, e.status, 'deleteSliderPhotos'));
    }

};
