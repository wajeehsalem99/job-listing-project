const {
  findAllJobs,
  deleteJob,
  createNewJob,
  searchJobs,
  updateJob,
} = require("../services/jobServices");

const getjobs = async (req, res, next) => {
  try {
    const jobs = await findAllJobs(req.query);
    return res.status(200).json(jobs);
  } catch (e) {
    console.log(e);
  }
};

const searchAllJobs = async (req, res, next) => {
  try {
    const { search } = req.query;
    const jobs = await searchJobs(search);

    return res.status(200).json(jobs);
  } catch (e) {
    console.log(e);
  }
};

const updateJobController = async (req, res, next) => {
  try {
    const jobToUpdate = req.body;

    await updateJob(jobToUpdate.id, jobToUpdate);
    return res.status(200).json({ msg: "succesfully updated job " });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getjobs, updateJobController, searchAllJobs };
