const User = require('../../dataBase/models/userModel');
module.exports = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
};
