const mongoose = require("mongoose");

const userModel = mongoose.Schema({
   
    first_name:{type:String, minLength:3, maxLength:15, required:true},
    last_name :{type:String, minLength:3, maxLength:15, required:true},
    dob:{type:Date,required:true,trim: true},
    email:{type:String, required:true, lowercase:true},
    password:{type:String, required:true, minLength:8},
    role:{enum:[Admin,Hr,SuperAdmin,Technical, DigitalMarketing, Other]},
    employe_id:{type:String,Required:true,},
    designationn:{type:String,maxLength:20,required:true},
    department:{type:String,maxLength:20, required:true},
    // blod_group:{enum:[A+,A-,B+,B-,O+,O-,AB+,AB-]},
    date_of_joining:{type:Date, required:true,trim:true},
    bank_ifo:{
        accound_number:{type:Number,required:type, maxLength:18,minLength:6},
        bank_name:{type:String, required:true},
        branch_name:{type:String, required:true},
        ifsc_code:{type:String, required:true, maxLength:11,minLength:11},
    },
    pan_number:{type:String,required:true,minLength:10,maxLength:10},
    aadhar_number:{type:Number,required:true,minLength:12,maxLength:12},
    persional_email:{type:String,required:true,lowercase:true},
    address:{ type:String, required:true, minLength:3, maxLength:50},
    town:{ type:String, required:true, minLength:3, maxLength:50},
    pincode:{ type:Number, required:true, maxLength:6, minLength:6},
    mobile:{ type:Number, required:true, minLength:10, maxLength:10},
    second_mobile:{type:Number, required:true, minLength:10, maxLength:10},
    emergency_contacts:{
        mobile:{ type:Number, required:true, minLength:10, maxLength:10},
        name:{type:String, minLength:3, maxLength:15, required:true},
        relationship:{type:String, minLength:3, maxLength:15, required:true},
    },
    second_emergency_contacts:{
        mobile:{ type:Number, required:true, minLength:10, maxLength:10},
        name:{type:String, minLength:3, maxLength:15, required:true},
        relationship:{type:String, minLength:3, maxLength:15, required:true},
    },
    system_data:{
        system_brand:{type:String, maxLength:15, required:true},
        system_model:{type:String, maxLength:15, required:true},
        system_number:{type:String, maxLength:15, required:true},
    },
    system_brand:{type:String, maxLength:15, required:true},
    status:{type:Boolean,default:true, required:true},
},{ timestamps: {} });

module.exports= mongoose.model( "user_data", userModel);

// {
    
//     employeid:{type: String,required:true}
//     address:{ type:String,maxLength:50}
// }