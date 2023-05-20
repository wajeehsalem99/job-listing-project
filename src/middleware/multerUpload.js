const multer = require("multer");
const DataUri = require("datauri/parser");
const storage = multer.memoryStorage();
const path = require("path");
const multerUploader = multer({ storage });
const dUri = new DataUri();

const dataUri = (req) => {
  const keys = Object.keys(req.files);
  return keys.map((el) => ({
    field: el,
    file: dUri.format(
      path.extname(req.files[el][0].originalname).toString(),
      req.files[el][0].buffer
    ),
  }));
};

module.exports = { multerUploader, dataUri };
