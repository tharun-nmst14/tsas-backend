const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Storage Engine
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "TSAS_Notices",
    resource_type: "raw"  // Allows PDF, DOCX, ZIP, images
  }
});

const upload = multer({ storage });

module.exports = upload;
