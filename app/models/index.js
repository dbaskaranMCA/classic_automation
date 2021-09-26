const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.refreshToken = require("./refreshToken.model");
db.employee = require("./employee.model");
db.customer = require("./customer.model");
db.enduser = require("./enduser.model");
db.attendanceVoucher = require("./attendance.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;