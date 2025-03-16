const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// Submit feedback
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const newFeedback = new Feedback({ name, email, message });
  await newFeedback.save();
  res.json({ message: "Feedback submitted!" });
});

module.exports = router;
