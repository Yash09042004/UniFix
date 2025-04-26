const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const feedbackRoutes = require("./routes/feedback");

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: ['https://unifix-frontend.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://yash09042004:yash09042004@cluster0.8j0jq.mongodb.net/unifix?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/feedback", feedbackRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "API is running",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: err.message
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API URL: https://unifix-api.onrender.com`);
});
