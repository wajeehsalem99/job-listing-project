const Job = require("../models/Job");
const { Op } = require("sequelize");

const findAllJobs = async (filters) => {
  const filtersQuery = createFiltersQuery(filters);
  return await Job.findAll(filtersQuery);
};

const createNewJob = async (job) => {
  return await Job.create(job);
};

const deleteJob = async (id) => {
  return await Job.destroy({ where: { id } });
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

const updateJob = async (id, values) => {
  return await Job.update(values, { where: { id } });
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
};
