const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
