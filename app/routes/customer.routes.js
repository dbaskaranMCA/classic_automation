const { verifyEmp } = require("../middlewares");
const controller = require("../controllers/customer.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/auth/addCustomer", controller.addCustomer);
    app.get("/api/auth/allCustomer", controller.findAllCustomer);
    app.get("/api/auth/allCustomer/:id", controller.findOne);
    app.put("/api/auth/allCustomer/:id", controller.update);
    app.delete("/api/auth/allCustomer/:id", controller.delete);
};