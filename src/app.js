const express = require('express');

const app = express();

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Basic GET / endpoint returning a hello message
app.get('/', (req, res) => {
  res.send('Hello, Server!');
});

module.exports = app;