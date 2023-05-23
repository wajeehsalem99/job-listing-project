const Job = require("../models/Job");
const { Op } = require("sequelize");
const Employer = require("../models/Client");

const findAllJobs = async (filters) => {
  const filtersQuery = createFiltersQuery(filters);
  return await Job.findAll(filtersQuery);
};

const createNewJob = async (id, job) => {
  const employer = await Employer.findOne(id);
  console.log(employer);
  if (!employer) return;
  return await employer.createJob(job);
};

const deleteJob = async (employerId, jobId) => {
  //   const employer = await Employer.findByPk(employerId);
  //   if (!employer) throw new Error("employer with specific id doesnt exists");
  //   if (!employer.hasJob({ where: { id: jobId } }))
  //     throw new Error("unautharized operation ");

  return await Job.destroy({ where: { id: jobId } });
};

const searchJobs = async (search) => {
  return await Job.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          description: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          profession: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          location: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          requirements: {
            [Op.like]: "%" + search + "%",
          },
        },
      ],
    },
  });
};

const updateJob = async (employerId, jobId, job) => {
  //   const employer = await Employer.findByPk(employerId);
  //   if (!employer) throw new Error("employer with specific id doesnt exists");
  //   if (!employer.hasJob({ where: { id: jobId } }))
  //     throw new Error("unautharized operation ");

  return await Job.update(job, { where: { id: jobId } });
};

const getJob = async (id) => {
  return await Job.findByPk(id);
};

const createFiltersQuery = (filters) => {
  if (!filters) return {};
  let filtersQuery = [];
  const { location, salary, profession } = filters;

  if (location) {
    filtersQuery.push({ location });
  }
  if (profession) {
    filtersQuery.push({ profession });
  }
  if (salary) {
    filtersQuery.push({
      salary: { [Op.between]: [salary[0], salary[1]] },
    });
  }
  return {
    where: {
      [Op.and]: filtersQuery,
    },
  };
};

module.exports = {
  findAllJobs,
  createNewJob,
  deleteJob,
  searchJobs,
  updateJob,
  getJob,
};
