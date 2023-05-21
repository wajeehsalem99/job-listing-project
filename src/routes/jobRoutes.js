const express = require("express");
const router = express.Router();
const {
  getjobs,
  updateJobController,
  searchAllJobs,
  createjob,
  getSpecificJob,
  deleteJobController,
} = require("../controllers/jobController");
const { verifyOwnerShip } = require("../middleware/verifyOwnership");
router.route("/").get(getjobs).post(createjob);
router.get("/search", searchAllJobs);

router
  .route("/:id")
  .get(getSpecificJob)
  .put(verifyOwnerShip, updateJobController)
  .delete(verifyOwnerShip, deleteJobController);

module.exports = router;
