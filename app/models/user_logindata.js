const mongoose = require("mongoose");

const logindata= mongoose.Schema({
    id:{type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
},{timestamps:{createdAt: 'login_At', updatedAt: false}});

module.exports= mongoose.model("login_data", logindata);