const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../openapi.json'); // Loads openapi.json from root
const taskRoutes = require('./routes/task.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

// Mount Swagger UI Documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

// Central error handler
app.use(errorHandler);

module.exports = app;