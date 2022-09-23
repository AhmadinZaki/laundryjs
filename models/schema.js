var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/laundry");

exports.UserSchema = mongoose.model("User", {
    username: {
      type: String,
      unique: true,
      required: true,
      dropDups: true,
    },
    password: String,
    email: String,
    salt: String,
  });