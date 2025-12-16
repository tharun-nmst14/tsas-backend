const Notice = require("../models/Notice");

exports.uploadNotice = async (req, res) => {
    try {
        // ✅ CHECK FILE
        if (!req.file) {
            return res.status(400).json({ message: "File is required" });
        }

        // ✅ CHECK TITLE
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        // ✅ CREATE NOTICE (createdAt auto added)
        const notice = await Notice.create({
            title,
            fileUrl: req.file.path
        });

        res.json({
            message: "Notice uploaded successfully",
            notice
        });

    } catch (error) {
        console.error("Notice upload error:", error);
        res.status(500).json({
            message: "Error uploading notice",
            error: error.message
        });
    }
};

exports.getNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 });
        res.json(notices);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notices" });
    }
};
