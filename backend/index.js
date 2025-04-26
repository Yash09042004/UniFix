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
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MongoDB URI is not defined in environment variables");
  process.exit(1);
}

// Connect to MongoDB Atlas with improved options
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increased timeout
  socketTimeoutMS: 45000,         // Increased socket timeout
  family: 4                       // Use IPv4, skip trying IPv6
})
.then(() => {
  console.log("✅ MongoDB Atlas Connected Successfully");
  console.log("MongoDB Connection State:", mongoose.connection.readyState);
})
.catch(err => {
  console.log("❌ MongoDB Atlas Connection Error:");
  console.error("Error details:", {
    name: err.name,
    message: err.message,
    code: err.code,
    stack: err.stack
  });
  process.exit(1);
});

// Add mongoose debug logging
mongoose.set('debug', true);

// Add connection event handlers
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Health check endpoint for Render
app.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(200).json({ 
    message: 'UniFix API is running',
    database: dbStatus
  });
});

// Routes
app.use("/api/scripts", require("./routes/scripts"));
app.use("/api/feedback", require("./routes/feedback"));

// Start Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
