const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'tasks.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

// Create tasks table
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT 0
  )
`);

// Seed 3 tasks ONLY if empty
const count = db.prepare('SELECT COUNT(*) AS count FROM tasks').get().count;

if (count === 0) {
  const insertStmt = db.prepare('INSERT INTO tasks (title, done) VALUES (?, ?)');
  const initialTasks = [
    ['Buy groceries', 0],
    ['Complete Week 3 Assignment 2', 0],
    ['Review SQL queries', 1]
  ];

  const seedTransaction = db.transaction((tasks) => {
    for (const [title, done] of tasks) {
      insertStmt.run(title, done);
    }
  });

  seedTransaction(initialTasks);
  console.log('Database initialized with seed data.');
}

module.exports = db;