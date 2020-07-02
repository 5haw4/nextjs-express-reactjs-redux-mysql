const connection = require("../utils/db/pool");

var actions = {};

//selecting all example
actions.getAllExamples = () => {
    return new Promise((res, rej) => {
        const queryString = `SELECT * FROM examples`;
        connection.query(queryString, (err, rows) => {
            if(err) rej(err)
            else res({ examples: rows})
        })
    })
}

//selecting a certain example by its ID
actions.getExampleById = (id) => {
    return new Promise((res, rej) => {
        const queryString = `SELECT * FROM examples WHERE id = ?`;
        connection.query(queryString, [id], (err, rows) => {
            if(err) rej(err)
            else res(rows.length ? rows[0] : {})
        })
    })
}

//deleting example by its ID
actions.deleteExample = (id) => {
    return new Promise((res, rej) => {
        const queryString = `DELETE FROM examples WHERE id = ?`;
        connection.query(queryString, [id], (err, rows) => {
            if(err) rej(err)
            else res(rows.affectedRows ? "Successfully deleted" : "Failed to delete")
        })
    })
}

//creating example
actions.createExample = (column1, column2) => {
    return new Promise((res, rej) => {
        const queryString = `INSERT INTO examples (column1, column2) VALUES (?,?)`;
        connection.query(queryString, [column1, column2], (err, rows) => {
            if(err) rej(err)
            else res(rows.affectedRows ? 
                {message: "Created successfully", id: rows.insertId} : {message: "Failed to create"})
        })
    })
}

//updating existing example
actions.updateExample = (id, column1, column2) => {
    return new Promise((res, rej) => {
        const queryString = `UPDATE examples SET column1 = ?, column2 = ? WHERE id = ?`;
        connection.query(queryString, [column1, column2, id], (err, rows) => {
            if(err) rej(err)
            else res({message: rows.affectedRows ? "Updated successfully" : "Failed to update"})
        })
    })
}

module.exports = actions