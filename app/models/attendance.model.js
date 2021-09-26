const mongoose = require("mongoose");

const AttendanceVoucher = mongoose.model(
    "AttendanceVoucher",
    new mongoose.Schema({
        EmployeeId: String,
        EmployeeName: String,
        CustomerName: String,
        endUser: String,
        cDate: String,
        projectDetails: String,
        siteLocation: String,
        foodExpenses: String,
        hotelExpenses: String,
        travellingExpenses: String,
        totalCredit: String,
        debit: String,
        projectId: String
        // roles: [
        //   {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Role"
        //   }
        // ]
    })
);

module.exports = AttendanceVoucher;