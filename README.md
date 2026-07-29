# Task API

A light, fast RESTful CRUD API built with Node.js and Express to manage a to-do list in memory. The project demonstrates backend fundamentals including HTTP method mapping, input validation, custom error handling, and interactive OpenAPI (Swagger) documentation using a layered architecture pattern.

---

## 🚀 Quick Start

### Installation & Run

You can install all dependencies and start the server with a single command:

```bash
npm install && npm start

```

*The server will start listening at `http://localhost:3000`.*

---

## 📡 Endpoints Overview

| HTTP Method | Endpoint | Description | Expected Status Codes |
| --- | --- | --- | --- |
| **GET** | `/` | API details and listing of main routes | `200 OK` |
| **GET** | `/health` | Server health check endpoint | `200 OK` |
| **GET** | `/tasks` | Retrieve all tasks (supports `?done=true` & `?search=term`) | `200 OK` |
| **GET** | `/tasks/:id` | Retrieve a single task by its ID | `200 OK`, `404 Not Found` |
| **POST** | `/tasks` | Create a new task (`title` required in JSON body) | `201 Created`, `400 Bad Request` |
| **PUT** | `/tasks/:id` | Update an existing task's `title` or `done` status | `200 OK`, `400 Bad Request`, `404 Not Found` |
| **DELETE** | `/tasks/:id` | Remove a task by its ID | `204 No Content`, `404 Not Found` |
| **GET** | `/docs` | Interactive Swagger UI documentation | `200 OK` |

---

## 🧪 Sample Request & Response

Here is a sample `curl -i` command showing a successful creation of a new task (`POST /tasks`):

```bash
$ curl -i -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy milk"}'

HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 42
Date: Wed, 29 Jul 2026 03:00:00 GMT
Connection: keep-alive

{"id":4,"title":"Buy milk","done":false}

```

---

## 📸 Interactive Documentation (Swagger UI)

Explore and test all CRUD endpoints visually by visiting `http://localhost:3000/docs`.

