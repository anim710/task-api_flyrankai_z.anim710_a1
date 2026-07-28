let tasks = [
  { id: 1, title: "Learn Express basics", done: true },
  { id: 2, title: "Build CRUD endpoints", done: false },
  { id: 3, title: "Add Swagger documentation", done: false }
];

let nextId = 4;

class TaskRepository {
  findAll(filters = {}) {
    let result = [...tasks];

    if (filters.done !== undefined) {
      const isDone = filters.done === 'true';
      result = result.filter(t => t.done === isDone);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(t => t.title.toLowerCase().includes(searchTerm));
    }

    return result;
  }

  findById(id) {
    return tasks.find(t => t.id === id) || null;
  }

  create(title) {
    const newTask = {
      id: nextId++,
      title: title.trim(),
      done: false
    };
    tasks.push(newTask);
    return newTask;
  }

  // ADD THESE TWO METHODS:
  update(id, updates) {
    const task = this.findById(id);
    if (!task) return null;

    if (updates.title !== undefined) {
      task.title = updates.title.trim();
    }
    if (updates.done !== undefined) {
      task.done = updates.done;
    }

    return task;
  }

  delete(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
  }
}

module.exports = new TaskRepository();