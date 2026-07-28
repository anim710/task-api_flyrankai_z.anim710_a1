const taskRepository = require('../repositories/task.repository');
const { NotFoundError, ValidationError } = require('../errors'); // Updated import

class TaskService {
  getAllTasks(filters) {
    return taskRepository.findAll(filters);
  }

  getTaskById(id) {
    const numericId = parseInt(id, 10);
    const task = taskRepository.findById(numericId);

    if (!task) {
      throw new NotFoundError(`Task ${id} not found`);
    }

    return task;
  }

  // ADD THIS METHOD:
  createTask(title) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
      throw new ValidationError('Title is required and must be a non-empty string.');
    }

    return taskRepository.create(title);
  }
}

module.exports = new TaskService();