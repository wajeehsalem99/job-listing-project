const express = require("express");
const router = express.Router();
const {
  getjobs,
  updateJobController,
  searchAllJobs,
} = require("../controllers/jobController");

router.route("/").get(getjobs).post().put(updateJobController);
router.get("/search", searchAllJobs);

module.exports = router;
