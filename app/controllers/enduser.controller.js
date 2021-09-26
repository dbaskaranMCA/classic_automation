const config = require("../config/auth.config");
const db = require("../models");
const { enduser: Enduser } = db;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.addEndUser = (req, res) => {
    const enduser = new Enduser({
        enduserId : req.body.enduserId,
        enduserName: req.body.enduserName,     
    });

    enduser.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        user.save((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            } else {
                res.send({ message: "Enduser Details are registered successfully!" });
            }

        });
    });
};

exports.findAllEndUser = (req, res) => {   
    Enduser.find({}).exec(function (err, enduser) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(enduser);
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Enduser.findOne({ enduserId: id }).exec(function (err, enduser) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(enduser);
    });
};


exports.update = (req, res) => {
    const id = req.params.id
    Enduser.updateOne({ id: req.params.id },
        {
            $set:
            {
                enduserId: req.body.enduserId,
                enduserName: req.body.enduserName                
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

            res.send({ message: "Enduser Details are Updated successfully!" })
        });
};

exports.delete = (req, res) => {
    const id = req.params.id
    Enduser.deleteOne({ enduserId: id }).exec(function (err, enduser) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(enduser);
    });
};


