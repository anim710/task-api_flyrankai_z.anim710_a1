const express = require('express');
const taskRoutes = require('./routes/task.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks", "/health", "/docs"]
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

// Mount task routes
app.use('/tasks', taskRoutes);

// Mount central error handler (MUST be added after routes)
app.use(errorHandler);

module.exports = app;