const express = require("express");
const router = express.Router();
const ApplicationController = require("../controllers/applicationContoller");
const applicationContoller = new ApplicationController();
const { multerUploader } = require("../middleware/multerUpload");
const { verifyOwnerShip } = require("../middleware/verifyOwnership");
router
  .route("/:id")
  .get(verifyOwnerShip, applicationContoller.getAppliction)
  .post(
    multerUploader.fields([
      { name: "cv", maxCount: 1 },
      { name: "cover", maxCount: 1 },
    ]),
    applicationContoller.apply
  );

module.exports = router;
