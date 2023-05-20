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
    console.log(e);
  }
};

const getSpecificJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await getJob(id);
    res.status(200).json(job);
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
    const { employerId } = req.query;
    const { id } = req.params;
    const jobToUpdate = req.body;

    await updateJob(employerId, id, jobToUpdate);
    return res.status(200).json({ msg: "succesfully updated job " });
  } catch (e) {
    console.log(e);
  }
};

const createjob = async (req, res, next) => {
  try {
    const { Employerid } = req.query;
    const job = req.body;

    const createdJob = await createNewJob(Employerid, job);
    res.status(200).json(createdJob);
  } catch (e) {
    console.log(e);
  }
};
const deleteJobController = async (req, res, next) => {
  const { employerId } = req.query;
  const { id } = req.params;
  try {
    const job = await deleteJob(employerId, id);
    res.status(200).json(job);
  } catch (e) {
    console.log(e);
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
