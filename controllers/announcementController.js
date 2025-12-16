const Announcement = require("../models/Announcement");

exports.uploadAnnouncement = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const announcement = await Announcement.create({ title });

        res.json({
            message: "Announcement uploaded successfully",
            announcement
        });

    } catch (error) {
        console.error("Announcement upload error:", error);
        res.status(500).json({
            message: "Error uploading announcement",
            error: error.message
        });
    }
};

exports.getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ createdAt: -1 });
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ message: "Error fetching announcements" });
    }
};
