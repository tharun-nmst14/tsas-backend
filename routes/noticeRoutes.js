const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
    uploadNotice,
    getNotices
} = require("../controllers/noticeController");

router.post("/upload", upload.single("file"), uploadNotice);
router.get("/", getNotices);

module.exports = router;
