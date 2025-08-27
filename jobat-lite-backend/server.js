const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// ✅ Active Routes — Make sure these filenames match
app.use('/api/upload', require('./routes/uploadRoutes'));       // Resume upload + parsing
app.use('/api/fairness', require('./routes/fairnessRoutes'));   // Bias scoring
app.use('/api/outreach', require('./routes/outreachRoutes'));   // Recruiter status updates
app.use('/api/resumes', require('./routes/resumeRoutes'));      // Resume history panel

// ✅ Socket Integration
require('./sockets/outreachSocket')(io);

// Health check
app.get('/', (req, res) => {
  res.send('✅ Jobat Lite backend is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
