const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const mongoose = require("mongoose");

// Submit feedback
router.post("/", async (req, res) => {
  try {
    // Check MongoDB connection
    if (mongoose.connection.readyState !== 1) {
      console.error("MongoDB is not connected. Current state:", mongoose.connection.readyState);
      return res.status(503).json({ 
        success: false, 
        message: "Service temporarily unavailable",
        error: "Database connection error"
      });
    }

    console.log("Received feedback submission:", req.body);
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields",
        details: {
          name: !name ? "Name is required" : null,
          email: !email ? "Email is required" : null,
          message: !message ? "Message is required" : null
        }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }
    
    const newFeedback = new Feedback({ name, email, message });
    
    // Set timeout for the save operation with increased timeout
    const savePromise = newFeedback.save();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Feedback save operation timed out')), 30000)
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
    console.error("Error stack:", error.stack);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      code: error.code
    });
    
    // Handle specific MongoDB errors
    if (error.name === 'MongoError' && error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Duplicate entry",
        error: "This feedback has already been submitted"
      });
    }

    // Handle timeout errors
    if (error.message.includes('timed out')) {
      return res.status(504).json({
        success: false,
        message: "Operation timed out",
        error: "The server took too long to respond. Please try again."
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Error saving feedback", 
      error: error.message || "Unknown error occurred",
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Get all feedback
router.get("/", async (req, res) => {
  try {
    // Check MongoDB connection
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ 
        success: false, 
        message: "Service temporarily unavailable",
        error: "Database connection error"
      });
    }

    // Set timeout for the find operation with increased timeout
    const findPromise = Feedback.find().exec();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Feedback find operation timed out')), 30000)
    );
    
    const feedback = await Promise.race([findPromise, timeoutPromise]);
    
    res.status(200).json({
      success: true,
      count: feedback.length,
      data: feedback
    });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    
    // Handle timeout errors
    if (error.message.includes('timed out')) {
      return res.status(504).json({
        success: false,
        message: "Operation timed out",
        error: "The server took too long to respond. Please try again."
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Error fetching feedback", 
      error: error.message || "Unknown error occurred"
    });
  }
});

module.exports = router;
