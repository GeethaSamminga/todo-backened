# Task Manager API

A simple REST API to manage tasks with user authentication.
Built with Node.js, Express, bcrypt, and JWT.

## How to run

```bash
npm install
node server.js
```

Runs on http://localhost:3000

## Endpoints

### POST /register
Register a new user.

### POST /login
Login and get a JWT token.

### POST /tasks
Create a new task.

### GET /tasks
Get all your tasks.

### GET /tasks/:id
Get a single task.

### PUT /tasks/:id
Update a task.

### DELETE /tasks/:id
Delete a task.

All /tasks routes need this header:
```
Authorization: <your token>
```
