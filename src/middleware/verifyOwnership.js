const Employer = require("../models/Client");
const Job = require("../models/Job");

const verifyOwnerShip = async (req, res, next) => {
  try{
  const { employerId } = req.query;
  const { id } = req.params;
  const job = await Job.findByPk(id);
  const employer = await Employer.findByPk(employerId);

  if (!employer) throw new Error("employer with specific id doesnt exists");
  const isOwnedByEmplyer = await employer.hasJob(job);
  if (!isOwnedByEmplyer) throw new Error("unautharized operation ");

  next();
}catch(e){
next(e);}
};

module.exports = { verifyOwnerShip };
