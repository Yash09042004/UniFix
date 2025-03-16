const express = require("express");
const router = express.Router();
const Script = require("../models/Script");

// Get all scripts
router.get("/", async (req, res) => {
  const scripts = await Script.find();
  res.json(scripts);
});

// Add a script (Admin Only)
router.post("/", async (req, res) => {
  const { name, description, downloadLink, domain } = req.body;
  const newScript = new Script({ name, description, downloadLink, domain });
  await newScript.save();
  res.json({ message: "Script Added!" });
});

module.exports = router;
