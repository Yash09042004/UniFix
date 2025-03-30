const express = require("express");
const path = require("path");
const router = express.Router();
const Script = require("../models/Script");

// Get all scripts or filter by category
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const scripts = await Script.find(query);
    res.json(scripts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch scripts" });
  }
});

// Serve the cleanop.sh script as a downloadable file
router.get("/download/cleanop", (req, res) => {
  const scriptPath = path.join(__dirname, "../shell_scripts/cleanop.sh");
  res.download(scriptPath, "cleanop.sh", (err) => {
    if (err) {
      console.error("Error downloading cleanop script:", err);
      res.status(500).send("Failed to download the script.");
    }
  });
});

module.exports = router;