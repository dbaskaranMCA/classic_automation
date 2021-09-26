const config = require("../config/auth.config");
const db = require("../models");
const { attendanceVoucher: AttendanceVoucher } = db;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.addAttendance = (req, res) => {
    const attendanceVoucher = new AttendanceVoucher({
        EmployeeId: req.body.EmployeeId,
        EmployeeName: req.body.EmployeeName,
        CustomerName: req.body.CustomerName,
        endUser: req.body.endUser,
        cDate: req.body.cDate,
        projectDetails: req.body.projectDetails,
        siteLocation: req.body.siteLocation,
        foodExpenses: req.body.foodExpenses,
        hotelExpenses: req.body.hotelExpenses,
        travellingExpenses: req.body.travellingExpenses,
        totalCredit: req.body.totalCredit,
        debit: req.body.debit,
        projectId: req.body.projectId
    });

    attendanceVoucher.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        user.save((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            } else {
                res.send({ message: "Attendance Voucher Details are registered successfully!" });
            }

        });
    });
};

exports.findAllAttendance = (req, res) => {
    const attendanceVoucher = new AttendanceVoucher({
        EmployeeId: req.body.EmployeeId,
        EmployeeName: req.body.EmployeeName,
        CustomerName: req.body.CustomerName,
        endUser: req.body.endUser,
        cDate: req.body.cDate,
        projectDetails: req.body.projectDetails,
        siteLocation: req.body.siteLocation,
        foodExpenses: req.body.foodExpenses,
        hotelExpenses: req.body.hotelExpenses,
        travellingExpenses: req.body.travellingExpenses,
        totalCredit: req.body.totalCredit,
        debit: req.body.debit,
        projectId: req.body.projectId
    });
    AttendanceVoucher.find({}).exec(function (err, attendanceVoucher) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(attendanceVoucher);
    });
};

exports.filterResult = (req, res) => {
    const attendanceVoucher = new AttendanceVoucher({
        EmployeeName: req.body.EmployeeName,
        CustomerName: req.body.CustomerName,
        fDate: req.body.fDate,
        tDate: req.body.tDate,
        projectDetails: req.body.projectDetails,
        siteLocation: req.body.siteLocation,

    });
    console.log(new Date(req.body.fDate).toISOString().slice(0, 10))
    console.log(new Date(req.body.tDate).toISOString().slice(0, 10))
    AttendanceVoucher.find({
        EmployeeName: req.body.EmployeeName,
        CustomerName: req.body.CustomerName,     
        $match: {            
            "cDate": {
                '$gte': new Date(req.body.fDate).toISOString().slice(0, 10),
                '$lt': new Date(req.body.tDate).toISOString().slice(0, 10)
            }
        }
    }).exec(function (err, attendanceVoucher) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(attendanceVoucher);
    });
}
exports.findOne = (req, res) => {
    const id = req.params.id;
    AttendanceVoucher.findOne({ EmployeeId: id }).exec(function (err, attendanceVoucher) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(attendanceVoucher);
    });
};


exports.update = (req, res) => {
    const id = req.params.id
    AttendanceVoucher.updateOne({ id: req.params.id },
        {
            $set:
            {
                EmployeeId: req.body.EmployeeId,
                EmployeeName: req.body.EmployeeName,
                CustomerName: req.body.CustomerName,
                endUser: req.body.endUser,
                cDate: req.body.cDate,
                projectDetails: req.body.projectDetails,
                siteLocation: req.body.siteLocation,
                foodExpenses: req.body.foodExpenses,
                hotelExpenses: req.body.hotelExpenses,
                travellingExpenses: req.body.travellingExpenses,
                totalCredit: req.body.totalCredit,
                debit: req.body.debit,
                projectId: req.body.projectId
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

            res.send({ message: "Attendance Voucher Details are Updated successfully!" })
        });
};

exports.delete = (req, res) => {
    const id = req.params.id
    AttendanceVoucher.deleteOne({ EmployeeId: id }).exec(function (err, attendanceVoucher) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(attendanceVoucher);
    });
};


