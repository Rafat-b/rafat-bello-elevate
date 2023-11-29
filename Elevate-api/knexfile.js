require("dotenv").config();

module.exports = {
  client: "mysql2",
  connection: {
    port: 3306,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
};