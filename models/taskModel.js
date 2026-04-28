let tasks = [];

function getTasksByUser(userId) {
  return tasks.filter(t => t.userId === userId);
}

function findTask(taskId, userId) {
  return tasks.find(t => t.id === taskId && t.userId === userId);
}

function createTask(title, userId) {
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
    userId
  };
  tasks.push(newTask);
  return newTask;
}

function updateTask(taskId, userId, data) {
  const task = findTask(taskId, userId);
  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.completed !== undefined) task.completed = data.completed;

  return task;
}

function deleteTask(taskId, userId) {
  const index = tasks.findIndex(t => t.id === taskId && t.userId === userId);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
}

module.exports = { getTasksByUser, findTask, createTask, updateTask, deleteTask };
