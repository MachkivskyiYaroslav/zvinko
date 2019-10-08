const User = require('../../dataBase/models/userModel');
module.exports =( async (req,res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    }catch (e) {
        res.status(404).send(e.message);
    }
}) ;
