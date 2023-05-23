const {
  findAllJobs,
  deleteJob,
  createNewJob,
  searchJobs,
  updateJob,
  getJob,
} = require("../services/jobServices");

const getjobs = async (req, res, next) => {
  try {
    const jobs = await findAllJobs(req.query);
    return res.status(200).json(jobs);
  } catch (e) {
    next(e);
  }
};

const getSpecificJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await getJob(id);
    res.status(200).json(job);
  } catch (e) {
    next(e);
  }
};

const searchAllJobs = async (req, res, next) => {
  try {
    const { search } = req.query;
    const jobs = await searchJobs(search);

    return res.status(200).json(jobs);
  } catch (e) {
    next(e);
  }
};

const updateJobController = async (req, res, next) => {
  try {
    const employerId = res.employerId;
    const { id } = req.params;
    const jobToUpdate = req.body;

    await updateJob(employerId, id, jobToUpdate);
    return res.status(200).json({ msg: "succesfully updated job " });
  } catch (e) {
    next(e);
  }
};

const createjob = async (req, res, next) => {
  try {
    // const EmployerId = req.query;

    const EmployerId = res.employerId;
    console.log(EmployerId);
    const job = req.body;

    const createdJob = await createNewJob(EmployerId, job);
    res.status(200).json(createdJob);
  } catch (e) {
    next(e);
  }
};
const deleteJobController = async (req, res, next) => {
  const employerId = res.employerId;
  const { id } = req.params;
  try {
    const job = await deleteJob(employerId, id);
    res.status(200).json(job);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getjobs,
  updateJobController,
  searchAllJobs,
  createjob,
  getSpecificJob,
  deleteJobController,
};
