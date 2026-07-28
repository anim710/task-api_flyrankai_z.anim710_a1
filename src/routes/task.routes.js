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

// POST /tasks
router.post('/', (req, res, next) => {
  try {
    const newTask = taskService.createTask(req.body.title);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

// ADD THIS ROUTE (PUT /tasks/:id):
router.put('/:id', (req, res, next) => {
  try {
    const updatedTask = taskService.updateTask(req.params.id, req.body);
    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
});

// ADD THIS ROUTE (DELETE /tasks/:id):
router.delete('/:id', (req, res, next) => {
  try {
    taskService.deleteTask(req.params.id);
    res.status(204).send(); // 204 No Content
  } catch (err) {
    next(err);
  }
});

module.exports = router;