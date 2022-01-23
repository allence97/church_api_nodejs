//User Model for saving user
const mongoose = require("mongoose");

const User = mongoose.model("User" ,new  mongoose.Schema({
    username: String,
    email: String,
    password: String,
    //one to few relation
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
}));

module.exports = User;