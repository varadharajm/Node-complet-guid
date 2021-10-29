const userModel = require("../models/user.model");
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
        const hashPassword = await hashGenerate(req.body.password);
        const userData = new userModel({
            first_name:req.body.first_name,
            last_name :req.body.last_name,
            dob:req.body.dob,
            email:req.body.email,
            password:hashPassword,
            town:req.body.town,
            pincode:req.body.pincode,
            mobile:req.body.mobile
        });
        const save = await userData.save();
        res.send(save);
    }catch{
        res.status(400).json({error : "data not found"});
    };
};


// To Login with user data
const userLogin = async(req, res) =>{
    try{
        const existinguser = await userModel.findOne({email: req.body.email});

        if(!existinguser){
            res.send("Invaild Email");
        }else{
            const checkuser = await hashvalidate(req.body.password, existinguser.password);
            if(!checkuser){
                res.send("Invalid Password");
            }else{
                // console.log(existinguser);
              //  const token = await generateToken(existinguser.email);
              const token = await generateToken(existinguser.email);
                // res.cookie("jwt",token);
                res.send({message : "Login Successfully", token});
            }
        }
    }catch (error){
        res.send(error);
    };
};

// To find logined user data
const userData = async(req, res) =>{
    const userdata = await userModel.findOne({email:req.body.email});
    res.send(userdata);
}


//  index Page 
const home = (req, res) =>{
    res.status(200).json({ message : "Welcome to the user page"});
};

// error page for wrong address 
const error = (req, res) =>{
    res.status(200).json({message: "404 Page Not Found"});
};

module.exports = {home, error, newUser, userLogin, userData};