const Employer = require("../models/Client");
const Job = require("../models/Job");
const jwt=require('jsonwebtoken')

const verifyOwnerShip = async (req, res, next) => {
  const token=req.cookies.token;
  if(!token)throw new Error("unautharized operation ");
  
  try{

    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    console.log(decoded)

  const { id } = req.params;
  const job = await Job.findByPk(id);
  const employer = await Employer.findByPk(decoded.id);

  if (!employer) throw new Error("employer with specific id doesnt exists");
  const isOwnedByEmplyer = await employer.hasJob(job);
  if (!isOwnedByEmplyer) throw new Error("unautharized operation ");

  next();
}catch(e){
next(e);}
};

module.exports = { verifyOwnerShip };
