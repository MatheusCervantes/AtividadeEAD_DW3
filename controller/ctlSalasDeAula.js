const mdlSalasDeAula = require("../model/mdlSalasDeAula");

const GetAllSalasDeAula = (req, res) =>
    (async () => {
        let registro = await mdlSalasDeAula.GetAllSalasDeAula();
        res.json({ status: "ok", registro: registro });
    })();

const GetSalasDeAulaByID = (req, res) =>
    (async () => {
        const salasdeaulaID = parseInt(req.body.salasdeaulaid);
        let registro = await mdlSalasDeAula.GetSalasDeAulaByID(salasdeaulaID);

        res.json({ status: "ok", registro: registro });
    })();

const InsertSalasDeAula = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.InsertSalasDeAula(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const UpdateSalasDeAula = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.UpdateSalasDeAula(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const DeleteSalasDeAula = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.DeleteSalasDeAula(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();
module.exports = {
    GetAllSalasDeAula,
    GetSalasDeAulaByID,
    InsertSalasDeAula,
    UpdateSalasDeAula,
    DeleteSalasDeAula
};
