const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const ffmpeg = require("fluent-ffmpeg");
const { addVideo } = require("./db");
const { getVideoDurationInSeconds } = require("get-video-duration");
const { execSync } = require("child_process");

dotenv.config();

const PORT = process.env.PORT || 3001;

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/videos/");
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const app = express();

const storeVideo = async (file) => {
  const duration = await getVideoDurationInSeconds(`./uploads/videos/${file}`);
  addVideo(file, duration);
};

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

const uploadThumbnail = (originalname) => {
  ffmpeg(`./uploads/videos/${originalname}`)
    .screenshots({
      count: 1,
      timemarks: ["00:00:03"],
      folder: "./uploads/thumbnails/",
      filename: `${originalname.split(".")[0]}.jpg`,
    })
    .on("end", () => {
      console.log("Thumbnail generated");
    })
    .on("error", (err) => {
      console.log(err);
    });
};

app.post("/upload-video", upload.single("videofile"), async (req, res) => {
  try {
    uploadThumbnail(req.file.originalname);
    await storeVideo(req.file.originalname);
    return res.status(200).send({
      message: "Successfully uploaded video",
      video: req.file.originalname,
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ message: error.message || "Error while uploading video" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
