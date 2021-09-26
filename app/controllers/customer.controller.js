const config = require("../config/auth.config");
const db = require("../models");
const { customer: Customer } = db;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.addCustomer = (req, res) => {
    const customer = new Customer({
        customerId : req.body.customerId,
        customerName: req.body.customerName,     
    });

    customer.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        user.save((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            } else {
                res.send({ message: "Customer Details are registered successfully!" });
            }

        });
    });
};

exports.findAllCustomer = (req, res) => {
    const customer = new Customer({
        customerId : req.body.customerId,
        customerName: req.body.customerName        
    });
    Customer.find({}).exec(function (err, customer) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(customer);
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Customer.findOne({ customerId: id }).exec(function (err, customer) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(customer);
    });
};


exports.update = (req, res) => {
    const id = req.params.id
    Customer.updateOne({ id: req.params.id },
        {
            $set:
            {
                customerId: req.body.customerId,
                customerName: req.body.customerName                
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
    Customer.deleteOne({ customerId: id }).exec(function (err, cars) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(cars);
    });
};


