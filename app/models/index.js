const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

db = {};
db.mongoose = mongoose;
db.user = require("../models/user.model");
db.user_login = require("../models/user_logindata");

module.exports = db;