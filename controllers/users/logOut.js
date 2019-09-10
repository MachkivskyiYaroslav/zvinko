module.exports=async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save()
        res.send('log out sucsessfuly');
    } catch (error) {
        res.status(500).send(error)
    }
};
