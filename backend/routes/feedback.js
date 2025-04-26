const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// Submit feedback
router.post("/", async (req, res) => {
  try {
    console.log("Received feedback submission:", req.body);
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields" 
      });
    }
    
    const newFeedback = new Feedback({ name, email, message });
    
    // Set timeout for the save operation
    const savePromise = newFeedback.save();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Feedback save operation timed out')), 15000)
    );
    
    const savedFeedback = await Promise.race([savePromise, timeoutPromise]);
    
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
      error: error.message || "Unknown error occurred"
    });
  }
});

// Get all feedback
router.get("/", async (req, res) => {
  try {
    // Set timeout for the find operation
    const findPromise = Feedback.find().exec();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Feedback find operation timed out')), 15000)
    );
    
    const feedback = await Promise.race([findPromise, timeoutPromise]);
    
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
      error: error.message || "Unknown error occurred"
    });
  }
});

module.exports = router;
