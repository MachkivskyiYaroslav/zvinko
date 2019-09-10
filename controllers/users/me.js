module.exports= async(req, res) => {
    // View logged in user profile
    res.send(req.user)
};
