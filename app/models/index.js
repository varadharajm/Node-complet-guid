const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

db = {};
db.mongoose = mongoose;
db.user = require("../models/user.model");

module.exports = db;