const taskModel = require('../models/taskModel');

function createTask(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const task = taskModel.createTask(title, req.user.id);
  res.status(201).json(task);
}

function getAllTasks(req, res) {
  const tasks = taskModel.getTasksByUser(req.user.id);
  res.json(tasks);
}

function getTaskById(req, res) {
  const taskId = parseInt(req.params.id);
  const task = taskModel.findTask(taskId, req.user.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
}

function updateTask(req, res) {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;

  const task = taskModel.updateTask(taskId, req.user.id, { title, completed });

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
}

function deleteTask(req, res) {
  const taskId = parseInt(req.params.id);
  const deleted = taskModel.deleteTask(taskId, req.user.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json({ message: 'Task deleted successfully' });
}

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };
