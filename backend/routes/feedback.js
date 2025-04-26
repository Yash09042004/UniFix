const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// Submit feedback
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields" 
      });
    }
    
    const newFeedback = new Feedback({ name, email, message });
    const savedFeedback = await newFeedback.save();
    
    console.log("Feedback saved successfully:", savedFeedback);
    
    res.status(201).json({ 
      success: true, 
      message: "Feedback submitted successfully!", 
      data: savedFeedback 
    });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error saving feedback", 
      error: error.message 
    });
  }
});

// Get all feedback
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json({
      success: true,
      count: feedback.length,
      data: feedback
    });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error fetching feedback", 
      error: error.message 
    });
  }
});

module.exports = router;
