const express = require("express");
const routerApp = express.Router();

routerApp.use((req, res, next) => {
    next();
});

routerApp.get("/", (req, res) => {
    res.send("Olá mundo!");
});

module.exports = routerApp;