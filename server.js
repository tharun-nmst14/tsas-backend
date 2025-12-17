require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

// Default Route
app.get("/", (req, res) => {
    res.send("TSAS Backend Running...");
});

// Notice Routes
app.use("/api/notices", require("./routes/noticeRoutes"));

// Announcement Routes
app.use("/api/announcements", require("./routes/announcementRoutes"));

// ⭐ Important Links Routes (NEW)
app.use("/api/important-links", require("./routes/importantLinks"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
