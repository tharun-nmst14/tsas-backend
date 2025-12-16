const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer(); // allows FormData (no file)

const {
    uploadAnnouncement,
    getAnnouncements
} = require("../controllers/announcementController");

router.post("/upload", upload.none(), uploadAnnouncement);
router.get("/", getAnnouncements);

module.exports = router;
