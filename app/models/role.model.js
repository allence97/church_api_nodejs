//Roles model for user roles
const mongoose = require("mongoose");

const Role = mongoose.model("Role" , new mongoose.Schema({
    name : String
}));

module.exports = Role;