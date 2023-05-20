const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Application = sequelize.define("Application", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Application;
