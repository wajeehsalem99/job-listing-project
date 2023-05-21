const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "root", "rooot", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
