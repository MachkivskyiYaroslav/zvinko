const slider= require('../../dataBase/models/sliderModel');
module.exports = async (req,res) => {
    try{
        await slider.find({}, (error, events) => {
                res.status(200).send(events);
        });
    }
    catch (error) {
        console.log(error);
    }
}
