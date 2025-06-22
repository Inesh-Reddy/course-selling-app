const adminLogin = (req, res) => {
    res.send("Admin Login");
}

const adminSignUp = (req, res) => {
    res.send("Admin Signup");
}


module.exports = {
    adminLogin,
    adminSignUp
}