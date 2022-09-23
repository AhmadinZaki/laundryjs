var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/laundry");

exports.userSchema = mongoose.model("User", 
{
    username: String,
    password: String,
    email: String,
    salt: String,
});