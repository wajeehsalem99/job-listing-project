const Application = require("../models/Application");
const Document = require("../models/Files");

module.exports = class ApplicationServices {
  async createApplication(application) {
    console.log(application);
    return await Application.create(application, {
      include: [{ model: Document, as: "documents" }],
    });
  }
};
