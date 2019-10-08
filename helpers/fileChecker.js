const uuid = require('uuid/v1');
const fs= require('fs');
const path = require('path');
const ControllerError = require('../error/ControllerError');
const {mimeTypes} = require('../constants');

module.exports= async (files, category) =>{
    try {

        const {photo, file} = files;

        if (!photo || Array.isArray(photo)) {
            throw new Error('File must be file');
        }

        const {name, mimetype, size} = photo;
        if (!mimeTypes.PHOTOS.includes(mimetype)) {
            throw new Error('Photo must have correct mime-type')
        }
        if (size > 5 * 1024 * 1024 || size < 512) {
            throw new Error('Size must be less then 5mb')
        }
        console.log('f')
        await fs.mkdir(path.resolve(`${appRoot}/public/${category}`), () => {
        }, {recursive: true});

        const photoName = uuid() + '.' + name.split('.').pop();
        photo.path =  `${category}/${photoName}`;
        photo.name = photoName;
        return {
            file,
            photo,
        }

    }
    catch (e) {
        throw new ControllerError(e.message, e.status, 'fileChecker');
    }
};
