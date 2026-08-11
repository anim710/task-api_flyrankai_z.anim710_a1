const taskRepository = require('../repositories/task.repository');
const { NotFoundError, ValidationError } = require('../errors');

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

  createTask(title) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
      throw new ValidationError('Title is required and must be a non-empty string.');
    }

    return taskRepository.create(title);
  }

  // ADD THESE TWO METHODS:
  updateTask(id, { title, done }) {
    const numericId = parseInt(id, 10);

    if (title === undefined && done === undefined) {
      throw new ValidationError("At least one field ('title' or 'done') must be provided to update.");
    }

    if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
      throw new ValidationError('Title must be a non-empty string.');
    }

    if (done !== undefined && typeof done !== 'boolean') {
      throw new ValidationError("'done' status must be a boolean.");
    }

    const updatedTask = taskRepository.update(numericId, { title, done });
    if (!updatedTask) {
      throw new NotFoundError(`Task ${id} not found`);
    }

    return updatedTask;
  }

  deleteTask(id) {
    const numericId = parseInt(id, 10);
    const deleted = taskRepository.delete(numericId);
    if (!deleted) {
      throw new NotFoundError(`Task ${id} not found`);
    }
  }
}

module.exports = new TaskService();