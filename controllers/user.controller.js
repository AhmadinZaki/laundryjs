const userModel = require("../models/user.model");


exports.userSignup = async (req, res, next) => {
    if (req.method === 'POST') {
        res.json({message: "hallo"})
    } else {
        res.json({})
    }
}