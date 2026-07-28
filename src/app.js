const express = require('express');

const app = express();

// Middleware to parse incoming JSON bodies
app.use(express.json());

// GET / - Root endpoint returning JSON describing the API
app.get('/', (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks", "/health", "/docs"]
  });
});

// GET /health - Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;