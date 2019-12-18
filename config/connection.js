const mysql = require("mysql");
const connection;
  
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(proces.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

  connection.connect();
  module.exports = connection;