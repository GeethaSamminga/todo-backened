let users = [];

function findByUsername(username) {
  return users.find(u => u.username === username);
}

function createUser(username, hashedPassword) {
  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword
  };
  users.push(newUser);
  return newUser;
}

module.exports = { findByUsername, createUser };
