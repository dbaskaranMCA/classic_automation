const mongoose = require("mongoose");

const Enduser = mongoose.model(
    "Enduser",
    new mongoose.Schema({
        enduserId: String,
        enduserName: String,
        // roles: [
        //   {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Role"
        //   }
        // ]
    })
);

module.exports = Enduser;