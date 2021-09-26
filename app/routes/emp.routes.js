const { verifyEmp } = require("../middlewares");
const controller = require("../controllers/emp.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/auth/addEmp", [verifyEmp.checkDuplicateEmployee], controller.addEmp);
    app.get("/api/auth/allEmp", controller.findAllEmp);
    app.get("/api/auth/allEmp/:id", controller.findOne);
    app.put("/api/auth/allEmp/:id", controller.update);
    app.delete("/api/auth/allEmp/:id", controller.delete);
};