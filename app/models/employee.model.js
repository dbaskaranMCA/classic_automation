const mongoose = require("mongoose");

const Employee = mongoose.model(
  "Employee",
  new mongoose.Schema({
    empid: String,
    empname: String,
    joiningdate: String,
    // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role"
    //   }
    // ]
  })
);

module.exports = Employee;