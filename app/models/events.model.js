const mongoose = require('mongoose');




const Events = mongoose.model("Events" ,new  mongoose.Schema({
name: String,
shortDescription : String,
description:String,
date : String,
price :Number,
free : Boolean ,
}));

module.exports = Events;