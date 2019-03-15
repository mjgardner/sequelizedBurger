require("dotenv").config();
var Sequelize = require("sequelize");
var sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "burgers_db_sequelize",
    process.env.MYSQL_USER || "root",
    process.env.MYSQL_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql"
    }
  );
}

module.exports = sequelize;
