const {body} = require("express-validator");

const userValidation = [
    body('first_name').exists().notEmpty().withMessage('name connot empty').isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('last_name').exists().notEmpty().withMessage('name connot empty').isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('dob').trim().isDate().notEmpty().withMessage('DOB is canot empty'),
    body('email').toLowerCase().isEmail().notEmpty().withMessage('Email is required'),
    body('password').trim().notEmpty().withMessage('password is required').isLength({min:8}).withMessage('password must be minimum 8 length').matches(/(?=.*?[A-Z])/).withMessage('At least one upercase').matches(/(?=.*?[a-z])/).withMessage('At least one lowercase').matches(/(?=.*?[0-9])/).withMessage('At least one number').matches(/(?=.*?[!@#$%^&*-?])/).withMessage('At least one special character').not().matches(/^$|\s+/).withMessage('White space not allowed'),
    body('town').notEmpty().withMessage('required').exists().isLength({min:3}).withMessage('too short!').isLength({max:30}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('pincode').notEmpty().withMessage('pincode required').isNumeric().isLength({min:6,max:6}),
    body('mobile').isNumeric().notEmpty().withMessage('Mobile number is must').isLength({min:10,max:10}).withMessage('Enter proper number'),

]
module.exports.userValidation = userValidation;