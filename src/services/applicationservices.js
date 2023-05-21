const Application = require("../models/Application");
const Document = require("../models/Files");
const Job = require("../models/Job");

module.exports = class ApplicationServices {
  async createApplication(id, application) {
    const job = await Job.findByPk(id);
    return await job.createApplication(application, {
      include: [{ model: Document, as: "documents" }],
    });
  }

  async getJobApplication(id) {
    const job = await Job.findByPk(id);

    return await job.getApplications({
      include: [{ model: Document, as: "documents" }],
    });
  }
};
