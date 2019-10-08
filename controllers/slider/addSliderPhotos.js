const {resolve: resolvePath} = require('path');
const sliderModel = require('../../dataBase/models/sliderModel');
const fileChecker = require('../../helpers/fileChecker');
const {category} = require('../../constants/photoDirectory');
const ControllerError = require('../../error/ControllerError');
const path = require('path')
module.exports= async (req,res,next) => {
    let photoInfo =
        {
            url: String,
            alt: String,
            title: String,
            link: String
        };
    try {
        if(req.files){
            let {photo} = req.files;
            photoInfo = req.body;
            if(photo){
                const {photo: goodPhoto}= await fileChecker(req.files,category);
                goodPhoto.mv((`C:/Users/machk/WebstormProjects/authenticate/ngApp/src/assets/images/${goodPhoto.path}`));
                photoInfo.url = goodPhoto.path;
                console.log(photoInfo.url)
                let photoModel= new sliderModel(photoInfo);
                await photoModel.save((error,savedPhoto) => {
                    if(error){
                        console.log(error)
                    }else{
                        res.status(200).send(savedPhoto);
                    }
                });

            }
        //
        }

        // let photoData = req.body;
        // let photo = new sliderModel(photoData);
        // photo.save((error, savedPhoto) => {
        //     if(error){
        //         console.log(error);
        //     }else{
        //         res.status(200).send(savedPhoto);
        //     }
        // })

    }
    catch (e) {
        console.log(e);
        next(new ControllerError(e.message, e.status, 'addSliderPhotos'))
    }
}
