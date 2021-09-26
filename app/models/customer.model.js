const mongoose = require("mongoose");

const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
        customerId: String,
        customerName: String,
        // roles: [
        //   {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Role"
        //   }
        // ]
    })
);

module.exports = Customer;