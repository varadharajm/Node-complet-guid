const mongoose = require("mongoose");

const userModel = mongoose.Schema({
   
    first_name:{type:String, minLength:3, maxLength:15, required:true},
    last_name :{type:String, minLength:3, maxLength:15, required:true},
    dob:{type:Date,required:true },
    email:{type:String, required:true, unique: true,lowercase:true},
    password:{type:String, required:true, minLength:8},
    mobile:{ type:Number, required:true, minLength:10, maxLength:10},
    role:{type:String, minLength:3,maxLength:20},
    designationn:{type:String,maxLength:20,required:true},
    department:{type:String,maxLength:20, required:true},
    date_of_joining:{type:Date, required:true,trim:true},
    bank_info:{
        accound_number:{type:Number,default:null, maxLength:18,minLength:6},
        bank_name:{type:String,},
        branch_name:{type:String,},
        ifsc_code:{type:String, maxLength:11,minLength:11},
    },
    pan_number:{type:String,minLength:10,maxLength:10},
    aadhar_number:{type:Number,minLength:12,maxLength:12},
    persional_email:{type:String,lowercase:true},
    address:{ type:String, minLength:3, maxLength:50},
    city:{ type:String, minLength:3, maxLength:50},
    pincode:{ type:Number, maxLength:6, minLength:6},   
    second_mobile:{type:Number, minLength:10, maxLength:10},
    emergency_contacts:{
        mobile:{ type:Number, minLength:10, maxLength:10},
        name:{type:String, minLength:3, maxLength:15},
        relationship:{type:String, minLength:3, maxLength:15},
    },
    second_emergency_contacts:{
        mobile:{ type:Number, minLength:10, maxLength:10},
        name:{type:String, minLength:3, maxLength:15},
        relationship:{type:String, minLength:3, maxLength:15},
    },
    system_data:{
        brand_name:{type:String, maxLength:15},
        brand_model:{type:String, maxLength:15},
        system_number:{type:String, maxLength:15},
    },
    status:{type:Boolean,default:true, required:true},
},{ timestamps: {} });

module.exports= mongoose.model( "user_data", userModel);
