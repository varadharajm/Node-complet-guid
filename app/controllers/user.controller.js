const userModel = require("../models/user.model");
const user_logindata = require("../models/user_logindata");
const {validationResult} = require("express-validator");
const {hashGenerate, hashvalidate} = require("../middlewares/hashing");
const { generateToken } = require("../middlewares/token");


// Create new user with data
const newUser = async(req, res) =>{
    try{
        const error = validationResult(req);
        
        
        if(!error.isEmpty()){
            res.status(422).json({ error :error.array()});
            return;
        }
        
        const existinguser = await userModel.findOne({email: req.body.email});
        if(!existinguser){
            const hashPassword = await hashGenerate(req.body.password);
            const userData = new userModel({
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                dob:req.body.dob,
                email:req.body.email,
                password:hashPassword,
                mobile:req.body.mobile,
                role:req.body.role,
                designationn:req.body.designationn,
                department:req.body.department,
                date_of_joining:req.body.date_of_joining,
                bank_info:{
                        accound_number:req.body.bank_info.accound_number,
                        bank_name:req.body.bank_info.bank_name,
                        branch_name:req.body.bank_info.branch_name,
                        ifsc_code:req.body.bank_info.ifsc_code
                    },
                pan_number:req.body.pan_number,
                aadhar_number:req.body.aadhar_number,
                persional_email:req.body.persional_email,
                address:req.body.address,
                city:req.body.city,
                pincode:req.body.pincode,   
                second_mobile:req.body.second_mobile,
                emergency_contacts:{
                    mobile:req.body.emergency_contacts.mobile,
                    name:req.body.emergency_contacts.name,
                    relationship:req.body.emergency_contacts.relationship,
                },
                second_emergency_contacts:{
                        mobile:req.body.second_emergency_contacts.mobile,
                        name:req.body.second_emergency_contacts.name,
                        relationship:req.body.second_emergency_contacts.relationship
                },
                system_data:{
                        brand_name:req.body.system_data.brand_name,
                        brand_model:req.body.system_data.brand_model,
                        system_number:req.body.system_data.system_number
                    }
            });
            const save = await userData.save();
            res.status(200).send(save);
            
        }else{
        res.status(202).send("user existe")
    }
    }catch{
        res.status(400).json({error : "data not found"});
    };
};


// To Login with user data
const userLogin = async(req, res) =>{
    try{
        const existinguser = await userModel.findOne({email: req.body.email});
        if(!existinguser){
            res.status(400).send("Invaild Email");
        }else{
            const checkuser = await hashvalidate(req.body.password, existinguser.password);
            if(!checkuser){
                res.status(400).send("Invalid Password");
            }else if(existinguser.status === true){
                const login_data =new user_logindata({
                    id:existinguser._id,
                    name:existinguser.first_name,
                    email:existinguser.email
                }).save();
              const token = await generateToken(existinguser.email);
              res.status(200).send({emai : existinguser.email, message : "Login Successfully", token});
                
            }else{
            
                res.status(401).send("Entery resticted");
            }
        }
}catch (error){
        res.status(202).send(error);
    };
};

// To find logined user data
const userData = async(req, res) =>{
    const userdata = await userModel.findOne({email:req.body.email});
    res.status(200).send(userdata);
}


//  index Page 
const home = (req, res) =>{
    res.status(200).json({ message : "Welcome to the user page"});
};

// error page for wrong address 
const error = (req, res) =>{
    res.status(404).json({message: "404 Page Not Found"});
};

module.exports = {home, error, newUser, userLogin, userData};