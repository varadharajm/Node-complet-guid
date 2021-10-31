const {body} = require("express-validator");

const userValidation = [
    body('first_name').exists().notEmpty().withMessage('name connot empty').isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('last_name').exists().notEmpty().withMessage('name connot empty').isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('dob').trim().isDate().notEmpty().withMessage('DOB is canot empty'),
    body('email').toLowerCase().isEmail().notEmpty().withMessage('Email is required'),
    body('password').trim().notEmpty().withMessage('password is required').isLength({min:8}).withMessage('password must be minimum 8 length').matches(/(?=.*?[A-Z])/).withMessage('At least one upercase').matches(/(?=.*?[a-z])/).withMessage('At least one lowercase').matches(/(?=.*?[0-9])/).withMessage('At least one number').matches(/(?=.*?[!@#$%^&*-?])/).withMessage('At least one special character').not().matches(/^$|\s+/).withMessage('White space not allowed'),
    body('mobile').isNumeric().notEmpty().withMessage('Mobile number is must').isLength({min:10,max:10}).withMessage('Enter proper number'),
    body('role').exists().not().isEmpty().isAlpha().withMessage('Only Alpha').isLength({min:3}).withMessage('Too Short value').isLength({max:20}).withMessage('Too long value').toUpperCase(),
    body('designationn').exists().not().isEmpty().isAlpha().withMessage('Only Alpha').isLength({min:3}).withMessage('Too Short value').isLength({max:20}).withMessage('Too long value').toUpperCase(),
    body('department').exists().not().isEmpty().isAlpha().withMessage('Only Alpha').isLength({min:3}).withMessage('Too Short value').isLength({max:20}).withMessage('Too long value').toUpperCase(),
    body('date_of_joining').trim().not().isEmpty().isDate(),
    body('bank_info.accound_number').exists().not().isEmpty().isNumeric().isLength({max:18,min:6}),
    body('bank_info.bank_name').exists().not().isEmpty().isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('Too long').isString().toUpperCase(),
    body('bank_info.branch_name').exists().not().isEmpty().isAlpha().toUpperCase().isLength({min:3}).withMessage('Too Short value').isLength({max:20}).withMessage('Too long value'),
    body('bank_info.ifsc_code').exists().not().isEmpty().isAlphanumeric().toUpperCase().isLength({min:11, max:11}).withMessage('IFSC contain 11 digites'),
    body('pan_number').isAlphanumeric().toUpperCase().isLength({min:10,max:10}).withMessage('PAN NUMBER is contain 10 digites length'),
    body('aadhar_number').isNumeric().isLength({min:12,max:12}).withMessage('AADHAR contain 12 digites length'),
    body('persional_email').toLowerCase().isEmail(),
    body('address').isString().isLength({min:3,max:50}).withMessage('3-20 digites length only'),
    body('city').exists().isLength({min:3}).withMessage('too short!').isLength({max:30}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('pincode').isNumeric().isLength({min:6,max:6}).withMessage('6 digites length only'),
    body('second_mobile').isNumeric().isLength({min:10,max:10}).withMessage('Enter proper number'),   
    body('emergency_contacts.mobile').isNumeric().isLength({min:10,max:10}).withMessage('Enter proper number'), 
    body('emergency_contacts.name').exists().isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('emergency_contacts.relationship').exists().isLength({min:3}).withMessage('too short!').isLength({max:15}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('second_emergency_contacts.mobile').isNumeric().isLength({min:10,max:10}).withMessage('Enter proper number'),
    body('second_emergency_contacts.name').exists().isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('second_emergency_contacts.relationship').exists().isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),  
    body('system_data.brand_name').exists().isLength({min:3}).withMessage('name too short!').isLength({max:15}).withMessage('name Too long').isString().isAlpha().withMessage('Only Alpha').toUpperCase(),
    body('system_data.brand_model').exists().isLength({min:3}).withMessage('brand_name too short!').isLength({max:15}).withMessage('name Too long').isString().isAlphanumeric().toUpperCase(),
    body('system_data.system_number').exists().isAlphanumeric().isLength({max:30}),
    
]
module.exports.userValidation = userValidation; 