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
            
        }else{
        res.status(402).send("user existe")
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
            res.send("Invaild Email");
        }else{
            const checkuser = await hashvalidate(req.body.password, existinguser.password);
            if(!checkuser){
                res.send("Invalid Password");
            }else if(existinguser.status === true){
                const login_data =new user_logindata({
                    id:existinguser._id,
                    name:existinguser.first_name,
                    email:existinguser.email
                }).save();
              const token = await generateToken(existinguser.email);
              res.send({emai : existinguser.email, message : "Login Successfully", token});
                
            }else{
            
                res.send("Entery resticted");
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