const express = require("express");
const routes = express.Router();

const {userValidation} = require("../middlewares/validate.helper");


const userControlles = require('../controllers/user.controller');
const { validateToken } = require("../middlewares/token");

routes.post('/newUser',userValidation,userControlles.newUser);
routes.post('/login',userControlles.userLogin)
routes.get('/user',validateToken,userControlles.userData)
routes.get('/',userControlles.home);
routes.get('*',userControlles.error);

module.exports = routes;