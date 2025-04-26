const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const feedbackRoutes = require("./routes/feedback");

dotenv.config();

const app = express();

// Enhanced CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://unifix-frontend.vercel.app',
  'https://unifix.vercel.app'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://yash09042004:yash09042004@cluster0.8j0jq.mongodb.net/unifix?retryWrites=true&w=majority";

if (!mongoURI) {
  console.error("❌ MongoDB URI is not defined in environment variables");
  process.exit(1);
}

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log("✅ MongoDB Connected Successfully");
  console.log("MongoDB Connection State:", mongoose.connection.readyState);
})
.catch(err => {
  console.log("❌ MongoDB Connection Error:");
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
    database: dbStatus,
    allowedOrigins: allowedOrigins
  });
});

// Routes
app.use("/api/scripts", require("./routes/scripts"));
app.use("/api/feedback", feedbackRoutes);

// Start Server
const PORT = process.env.PORT || 7001;

// Check if port is already in use
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Trying port ${PORT + 1}`);
    app.listen(PORT + 1, () => {
      console.log(`Server running on port ${PORT + 1}`);
    });
  } else {
    console.error('Server error:', err);
  }
});
