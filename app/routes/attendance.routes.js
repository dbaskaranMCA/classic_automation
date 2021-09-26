const { verifyEmp } = require("../middlewares");
const controller = require("../controllers/attendance.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/auth/addAttendance",controller.addAttendance);
    app.get("/api/auth/allAttendance", controller.findAllAttendance);
    app.get("/api/auth/allAttendance/:id", controller.findOne);
    app.put("/api/auth/allAttendance/:id", controller.update);
    app.delete("/api/auth/allAttendance/:id", controller.delete);
    app.post("/api/auth/filterResult",controller.filterResult);
};