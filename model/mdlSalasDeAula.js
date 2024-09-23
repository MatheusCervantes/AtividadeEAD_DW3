const db = require("../database/databaseConfig");

const GetAllSalasDeAula = async () => {
    return (
        await db.query(
            "SELECT * " + "FROM salasdeaula where removido = false ORDER BY descricao ASC"
        )
    ).rows;
};

const GetSalasDeAulaByID = async (salasdeaulaIDPar) => {
    return (
        await db.query(
            "SELECT * " +
            "FROM salasdeaula WHERE salasdeaulaid = $1 and removido = false ORDER BY descricao ASC",
            [salasdeaulaIDPar]
        )
    ).rows;
};

const InsertSalasDeAula = async (registroPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "INSERT INTO salasdeaula " + "values(default, $1, $2, $3, $4)",
                [
                    registroPar.descricao,
                    registroPar.localizacao,
                    registroPar.capacidade,
                    registroPar.removido,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|insertSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

const UpdateSalasDeAula = async (registroPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE salasdeaula SET " +
                "descricao = $2, " +
                "localizacao = $3, " +
                "capacidade = $4, " +
                "removido = $5 " +
                "WHERE salasdeaulaid = $1",
                [
                    registroPar.salasdeaulaid,
                    registroPar.descricao,
                    registroPar.localizacao,
                    registroPar.capacidade,
                    registroPar.removido,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|UpdateSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};


const DeleteSalasDeAula = async (registroPar) => {
    let linhasAfetadas;
    let msg = "ok";

    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE salasdeaula SET " + "removido = true " + "WHERE salasdeaulaid = $1",
                [registroPar.salasdeaulaid]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|DeleteSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};


module.exports = {
    GetAllSalasDeAula,
    GetSalasDeAulaByID,
    InsertSalasDeAula,
    UpdateSalasDeAula,
    DeleteSalasDeAula,
};