const { dataUri } = require("../middleware/multerUpload");
const uploader = require("../middleware/upload");
const ApllicationServices = require("../services/applicationservices");
const applicationservices = new ApllicationServices();

module.exports = class ApplicationController {
  async apply(req, res, next) {
    const { id } = req.params;
    try {
      if (!req.files) return res.status(400).send("you need to upload resume");
      const files = dataUri(req);
      const documents = await Promise.all(
        files.map(async (file) => {
          const { asset_id, public_id, url, format } = await uploader.upload(
            file.file.content
          );

          return { type: file.field, asset_id, public_id, url, format };
          console.log({ asset_id, public_id, url, format });
        })
      );

      const application = await applicationservices.createApplication(id, {
        ...req.body,
        documents: documents,
      });
      res.status(200).json(application);
    } catch (e) {
      next(e);
    }
  }

  async getAppliction(req, res, next) {
    try {
      const employerId = res.employerId;
      // const { id } = req.params;
      const applictions = await applicationservices.getJobApplication(
        employerId
      );
      res.status(200).json(applictions);
    } catch (e) {
      next(e);
    }
  }
};
