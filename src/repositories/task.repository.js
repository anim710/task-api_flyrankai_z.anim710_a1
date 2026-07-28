let tasks = [
  { id: 1, title: "Learn Express basics", done: true },
  { id: 2, title: "Build CRUD endpoints", done: false },
  { id: 3, title: "Add Swagger documentation", done: false }
];

let nextId = 4; // Tracks the next available ID

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

  // ADD THIS METHOD:
  create(title) {
    const newTask = {
      id: nextId++,
      title: title.trim(),
      done: false
    };
    tasks.push(newTask);
    return newTask;
  }
}

module.exports = new TaskRepository();