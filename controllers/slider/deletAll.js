const slider= require('../../dataBase/models/sliderModel');
module.exports= async (req,res) => {
    try {
        await slider.remove({},(error,succesfull) => {
            res.status(200).send(succesfull);
            console.log('collection drop');
        })
    }
    catch (error) {
        console.log(error)
    }
};
