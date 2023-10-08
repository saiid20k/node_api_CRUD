const mysql = require('mysql')

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_api"
});

pool.getConnection((error, con) => {
    if(error){
        console.log("No Connection!");
    } else {
        console.log("Database Connect Succesful.");
    }
});

module.exports = pool;