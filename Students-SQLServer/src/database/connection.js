const mssql = require('mssql');

const dataBaseConfig = {
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    // server: process.env.SERVER,
    // database: process.env.DATABASE
    user: "sa",
    password: "C0nnect123",
    server: "localhost",
    database: "SchoolDB"
}
mssql.connect(dataBaseConfig, (err) => {
    if (err) {
        console.log("Fail to connect to SQL Server. Error: \n " + err);
    } else {
        console.log("Successfully connected to SQL Server");
    }
});

module.exports = mssql;