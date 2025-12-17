const express = require("express");
const router = express.Router();

const ImportantLink = require("../models/ImportantLink");

/**
 * @route   POST /api/important-links
 * @desc    Add a new important link (Admin)
 */
router.post("/", async (req, res) => {
  try {
    const { title, url } = req.body;

    if (!title || !url) {
      return res.status(400).json({ message: "Title and URL are required" });
    }

    const newLink = new ImportantLink({
      title,
      url
    });

    await newLink.save();

    res.status(201).json({
      message: "Important link added successfully",
      link: newLink
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding important link",
      error
    });
  }
});

/**
 * @route   GET /api/important-links
 * @desc    Get all active important links (Frontend)
 */
router.get("/", async (req, res) => {
  try {
    const links = await ImportantLink.find({ active: true })
      .sort({ createdAt: -1 }); // latest first

    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching important links",
      error
    });
  }
});

module.exports = router;
