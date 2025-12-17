const mongoose = require("mongoose");

const importantLinkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    url: {
      type: String,
      required: true,
      trim: true
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true // adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model("ImportantLink", importantLinkSchema);
