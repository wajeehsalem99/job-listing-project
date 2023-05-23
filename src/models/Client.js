const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt=require('bcrypt')

const Employer = sequelize.define("Employer", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,   

  }
  ,

  phone: {
    type: DataTypes.STRING,
  },
});

Employer.beforeCreate(async(user,options)=>{

  bcrypt.hash(user.password,10,(err,res)=>{
    user.password=res
  })
})
module.exports = Employer;
