require("./config/database")();
require("dotenv").config();
const express = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const app = express();
const jobRoutes = require("./src/routes/jobRoutes");
const bodyParser = require("body-parser");
const apllicationRoutes = require("./src/routes/applicationRoute");
const cookieParser=require('cookie-parser')
const employerRoutes=require('./src/routes/employerRoutes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/',employerRoutes);
app.use("/jobs", jobRoutes);
app.use("/apply", apllicationRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(400).json({error:err.stack})
  })

// const cpUpload = upload.fields([
//   { name: "cv", maxCount: 1 },
//   { name: "cover", maxCount: 1 },
// ]);
// app.post("/upload", cpUpload, function (req, res, next) {
//   console.log(Object.keys(req.files));
// });

app.listen(3000, () => console.log("sssssss"));
