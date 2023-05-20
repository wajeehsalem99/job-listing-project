const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Employer = sequelize.define("Employer", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Employer;
