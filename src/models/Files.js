const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Document = sequelize.define("Document", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  asset_id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  public_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  format: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Document;
