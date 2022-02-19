const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const mainRouter = require("./routes/index");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
dotenv.config();

const { MONGO_URL, PORT } = process.env;

app.use("/images", express.static(path.join(__dirname, "public/images")));
mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser("vinhkyit"));
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

mainRouter(app);

app.listen(PORT || 4000, () => {
  console.log(`Server is running on port ${PORT || 4000}`);
});
