const jwt = require("jsonwebtoken");


//  generate jwt token for user login
const generateToken = (email)=>{
    const token = jwt.sign({email}, process.env.KEY, {expiresIn:"3hours"});
    return token;
};


// validate the user token 
const validateToken = (req, res, next) =>{
    try{
    const vaild = jwt.verify(req.headers["token"], process.env.KEY);
    if(vaild){
        next();
    }else{
        res.send("Access Denied");
    }
}catch{
    res.send({Message: "Invaild Token"});
}
}



module.exports.generateToken = generateToken;
module.exports.validateToken = validateToken;