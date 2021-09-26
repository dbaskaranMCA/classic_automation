const config = require("../config/auth.config");
const db = require("../models");
const { employee: Employee } = db;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.addEmp = (req, res) => {
    const employee = new Employee({
        empid: req.body.EmployeeId,
        empname: req.body.EmployeeName,
        joiningdate: req.body.JoiningDate
    });

    employee.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        user.save((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            } else {
                res.send({ message: "Employee Details are registered successfully!" });
            }

        });
    });
};

exports.findAllEmp = (req, res) => {
    const employee = new Employee({
        empid: req.body.EmployeeId,
        empname: req.body.EmployeeName,
        joiningdate: req.body.JoiningDate
    });
    Employee.find({}).exec(function (err, emp) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(emp);
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Employee.findOne({ empid: id }).exec(function (err, cars) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(cars);
    });
};


exports.update = (req, res) => {
    const id = req.params.id
    Employee.updateOne({ id: req.params.id },
        {
            $set:
            {
                empid: req.body.EmployeeId,
                empname: req.body.EmployeeName,
                joiningdate: req.body.JoiningDate
            }
        }, function (err, user) {
            if (err) return next(err);
            // Employee.findById(req.user.id, function (err, user) {
            //     if (err) return next(err);
            //     return res.render('user', {
            //         empid: user.EmployeeId,
            //         empname: user.EmployeeName,
            //         joiningdate: user.JoiningDate
            //     });
            // });

            res.send({ message: "Employee Details are Updated successfully!" })
        });
};

exports.delete = (req, res) => {
    const id = req.params.id
    Employee.deleteOne({ empid: id }).exec(function (err, cars) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(cars);
    });
};


