const userLogin = (req, res, next) => {
    res.send("userLogin");
    next();
}

const userSignup = (req, res) => {
    res.send("user Signup");
    next();
}

module.exports = {
    userLogin,
    userSignup,
}