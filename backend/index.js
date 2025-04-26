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

// MongoDB connection options
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increased timeout
  socketTimeoutMS: 45000,         // Increased socket timeout
  connectTimeoutMS: 30000,        // Added connection timeout
  maxPoolSize: 10,               // Added connection pool size
  minPoolSize: 5,                // Added minimum pool size
  family: 4                      // Use IPv4, skip trying IPv6
};

// Function to connect to MongoDB with retry logic
const connectWithRetry = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(MONGODB_URI, mongooseOptions);
      console.log("✅ MongoDB Atlas Connected Successfully");
      console.log("MongoDB Connection State:", mongoose.connection.readyState);
      return;
    } catch (error) {
      console.error(`❌ MongoDB Connection Attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay/1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error("❌ All MongoDB connection attempts failed");
        process.exit(1);
      }
    }
  }
};

// Connect to MongoDB with retry
connectWithRetry();

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
  // Attempt to reconnect
  setTimeout(() => connectWithRetry(3, 3000), 3000);
});

// Health check endpoint for Render
app.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(200).json({ 
    message: 'UniFix API is running',
    database: dbStatus,
    uptime: process.uptime()
  });
});

// Routes
app.use("/api/scripts", require("./routes/scripts"));
app.use("/api/feedback", require("./routes/feedback"));

// Start Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
