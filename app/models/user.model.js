const mongoose = require("mongoose");

const userModel = mongoose.Schema({
   
    first_name:{type:String, minLength:3, maxLength:15, required:true},
    last_name :{type:String, minLength:3, maxLength:15, required:true},
    dob:{type:Date,required:true,trim: true},
    email:{type:String, required:true, lowercase:true},
    password:{type:String, required:true, minLength:8},
    //role:{enum:[Admin,Hr,SuperAdmin,Technical, DigitalMarketing, Other]},
    town:{ type:String, required:true, minLength:3, maxLength:50},
    pincode:{ type:Number, required:true, maxLength:6, minLength:6},
    mobile:{ type:Number, required:true, minLength:10, maxLength:10},
    status:{type:Boolean,default:true, required:true},
},{ timestamps: {} });

module.exports= mongoose.model( "user_data", userModel);

// {
    
//     employeid:{type: String,required:true}
//     address:{ type:String,maxLength:50}
// }