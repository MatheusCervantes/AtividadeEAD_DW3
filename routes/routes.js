const express = require("express");
const routerApp = express.Router();

const appSalasDeAula = require("../controller/ctlSalasDeAula");

routerApp.use((req, res, next) => {
    next();
});

routerApp.get("/", (req, res) => {
    res.send("Olá mundo!");
});

routerApp.get("/GetAllSalasDeAula", appSalasDeAula.GetAllSalasDeAula);
routerApp.post("/GetSalasDeAulaByID", appSalasDeAula.GetSalasDeAulaByID);
routerApp.post("/InsertSalasDeAula", appSalasDeAula.InsertSalasDeAula);
routerApp.post("/UpdateSalasDeAula", appSalasDeAula.UpdateSalasDeAula);
routerApp.post("/DeleteSalasDeAula", appSalasDeAula.DeleteSalasDeAula);

module.exports = routerApp;