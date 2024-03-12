const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const {
  addVideo,
  getAllVideos,
  getFavoriteVideos,
  getDeletedVideos,
  switchDeleteVideo,
  switchFavVideo,
} = require("./db");
const { getVideoDurationInSeconds } = require("get-video-duration");

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

app.use("/uploads", express.static("uploads"));

const uploadThumbnail = (req, res, next) => {
  ffmpeg(`./uploads/videos/${req.file.originalname}`)
    .screenshots({
      count: 1,
      timemarks: ["00:00:03"],
      folder: "./uploads/thumbnails/",
      filename: `${req.file.originalname.split(".")[0]}.jpg`,
    })
    .on("end", () => {
      console.log("Thumbnail generated");
      next();
    })
    .on("error", (error) => {
      return res
        .status(error.status || 500)
        .send({ message: error.message || "Error while generating thumbnail" });
    });
};

app.post(
  "/upload-video",
  upload.single("videofile"),
  uploadThumbnail,
  async (req, res) => {
    try {
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
  }
);
app.put("/switch-delete-video", async (req, res) => {
  try {
    switchDeleteVideo(req.body.id);
    return res.status(200).send({
      message: "Successfully switched delete video",
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ message: error.message || "Error while switching delete video" });
  }
});
app.put("/switch-favorite-video", async (req, res) => {
  try {
    switchFavVideo(req.body.id);
    return res.status(200).send({
      message: "Successfully switched favorite video",
    });
  } catch (error) {
    return res.status(error.status || 500).send({
      message: error.message || "Error while switching favorite video",
    });
  }
});
app.get("/get-all-videos", (_req, res) => {
  try {
    const videos = getAllVideos();
    return res.status(200).send({
      message: "Successfully retrieved all videos",
      videos,
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ message: error.message || "Error while getting all videos" });
  }
});
app.get("/get-favorite-videos", (_req, res) => {
  try {
    const videos = getFavoriteVideos();
    return res.status(200).send({
      message: "Successfully retrieved favorite videos",
      videos,
    });
  } catch (error) {
    return res.status(error.status || 500).send({
      message: error.message || "Error while getting favorite videos",
    });
  }
});
app.get("/get-deleted-videos", (_req, res) => {
  try {
    const videos = getDeletedVideos();
    return res.status(200).send({
      message: "Successfully retrieved deleted videos",
      videos,
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ message: error.message || "Error while getting deleted videos" });
  }
});
app.get("/video", (req, res) => {
  // stream video
  // respond with the file size, and then send chunks of the video
  const video = req.query.id;
  const path = `uploads/videos/${video}`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-"); // Range: "bytes=100-200" --> structure of Range header
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;
    const file = fs.createReadStream(path, {
      start,
      end,
    });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
