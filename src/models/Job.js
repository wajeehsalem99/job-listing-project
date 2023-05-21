const { Sequelize, DataTypes } = require("sequelize");
const sequlize = require("../config/db");

const Job = sequlize.define("Job", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  expiresAT: {
    type: DataTypes.DATE,
  },
  location: {
    type: DataTypes.STRING,
  },
  salary: {
    type: DataTypes.INTEGER,
  },
  requirements: {
    type: DataTypes.STRING,
  },
  profession: {
    type: DataTypes.STRING,
  },
});
Job.prototype.isOwnedById = (id) => this.EmployerId === id;
module.exports = Job;
