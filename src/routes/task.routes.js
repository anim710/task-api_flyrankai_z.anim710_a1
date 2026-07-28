const express = require('express');
const router = express.Router();
const taskService = require('../services/task.service');

// GET /tasks
router.get('/', (req, res, next) => {
  try {
    const tasks = taskService.getAllTasks(req.query);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// GET /tasks/:id
router.get('/:id', (req, res, next) => {
  try {
    const task = taskService.getTaskById(req.params.id);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// ADD THIS ROUTE (POST /tasks):
router.post('/', (req, res, next) => {
  try {
    const newTask = taskService.createTask(req.body.title);
    res.status(201).json(newTask); // Returns 201 Created
  } catch (err) {
    next(err); // Hands any ValidationError over to errorHandler middleware
  }
});

module.exports = router;