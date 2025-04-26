const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Enhanced CORS configuration for deployment - allow all origins temporarily
app.use(cors({
  origin: '*', // Allow all origins for now
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// MongoDB Atlas connection string
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://<db_username>:<db_password>@cluster0.zkumq4a.mongodb.net/unifix";

// Connect to MongoDB Atlas with improved options
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increased timeout
  socketTimeoutMS: 45000,         // Increased socket timeout
  family: 4                       // Use IPv4, skip trying IPv6
})
.then(() => console.log("✅ MongoDB Atlas Connected Successfully"))
.catch(err => {
  console.log("❌ MongoDB Atlas Connection Error:");
  console.error(err);
});

// Add mongoose debug logging
mongoose.set('debug', true);

// Health check endpoint for Render
app.get('/', (req, res) => {
  res.status(200).json({ message: 'UniFix API is running' });
});

// Routes
app.use("/api/scripts", require("./routes/scripts"));
app.use("/api/feedback", require("./routes/feedback"));

// Start Server
const PORT = process.env.PORT || 7001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
