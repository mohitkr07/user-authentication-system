const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "loginsys",
});

connection.connect((err) => {
  if (err) console.log("error connecting to the database: " + err);
  else console.log("Connection established with database");
});

module.exports = connection;
