const db = require("../models");
const Employee = db.employee;

checkDuplicateEmployee = (req, res, next) => {
 
  // Username
  Employee.findOne({
    empid: req.body.EmployeeId
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Employee is already in use!" });
      return;
    }   
    next();
  });
};



const verifyEmp= {
  checkDuplicateEmployee,  
};

module.exports = verifyEmp;