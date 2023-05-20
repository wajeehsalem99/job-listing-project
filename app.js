require("./config/database")();
require("dotenv").config();
const express = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const app = express();
const jobRoutes = require("./src/routes/jobRoutes");
const bodyParser = require("body-parser");
const apllicationRoutes = require("./src/routes/applicationRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/jobs", jobRoutes);
app.use("/apply", apllicationRoutes);

// const cpUpload = upload.fields([
//   { name: "cv", maxCount: 1 },
//   { name: "cover", maxCount: 1 },
// ]);
// app.post("/upload", cpUpload, function (req, res, next) {
//   console.log(Object.keys(req.files));
// });

app.listen(3000, () => console.log("sssssss"));
