const { Sequelize } = require("sequelize");
const sequelize = require("../src/config/db");
const Application = require("../src/models/Application");
const Document = require("../src/models/Files");
const Job = require("../src/models/Job");
const Employer = require("../src/models/Client");
Employer.hasMany(Job);
Job.hasMany(Application);
Application.hasMany(Document, { as: "documents" });

module.exports = () => {
  sequelize
    .sync({ force: false })
    .then(async (result) => {
      const employer = await Employer.create({
        name: "laith",
        email: "laith@",
        phone: "05688484",
      });
      employer.createJob({
        title: "job for a dentist ",
        location: "nablus",
        description: "dentist is requried for a dental clinic in nablus",
        salary: 2500,
      });
    })
    .catch((err) => console.log(err));
};
