const mssql = require('../models/studentsModel'); //puxa do model

exports.selectAll = async (req, res) => {
    var sql_query = "SELECT * FROM Students";
    var request = await new mssql.Request();

    request.query(sql_query, (err, answer) => {
        if (err) {
            console.log("Fail to select students from the table");
        } else {
            res.send(answer);
        }
    });    
}

exports.selectById = async (req, res) => {
    var sql_query = `SELECT * FROM Students WHERE idStudent=${req.params.id}`;
    var request = await new mssql.Request();

    request.query(sql_query, (err, answer) => {
        if (err) {
            console.log("Fail to select students from the table");
        } else {
            res.send(answer);
        }
    });
}

//addStudent
//updateStudent
//deleteStudent