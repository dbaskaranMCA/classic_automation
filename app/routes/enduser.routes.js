const { verifyEmp } = require("../middlewares");
const controller = require("../controllers/enduser.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/auth/addEndUser", controller.addEndUser);
    app.get("/api/auth/allEndUser", controller.findAllEndUser);
    app.get("/api/auth/allEndUser/:id", controller.findOne);
    app.put("/api/auth/allEndUser/:id", controller.update);
    app.delete("/api/auth/allEndUser/:id", controller.delete);
};