const mysql = require("mysql2/promise");
const util = require("util");

var pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "swords",
  password: "sw0rdSh0p",
  database: "db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }
  if (connection) connection.release();
  return;
});

module.exports = pool;
