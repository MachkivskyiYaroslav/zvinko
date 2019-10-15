const fs = require('fs');
const path = require('path');
const ControllerError = require('../error/ControllerError');
module.exports = async (url) => {
    try {
        fs.unlink(path.resolve(`${appRoot}/public/${url}`), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('File deleted')
            }
        })
    } catch (e) {
        throw new ControllerError(e.message, e.status, 'fileDelete');
    }
};
