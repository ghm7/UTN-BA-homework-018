const pool = require('../pool');

async function getUsers(user, password) {
  try {
    const query = 'SELECT * FROM `users` WHERE 1;';
    const rows = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function registerUser(user, password) {
  try {
    const isUserRegistered = await isRegistered(user);
    if (!isUserRegistered) {
      const query = `INSERT INTO users (user, password, role) VALUES (?, ?, ?)`;
      pool.query(query, [user, password, 'guest']);
      return true;
    }
  } catch (error) {
    throw error;
  }
}

async function isRegistered(user) {
  const query = `SELECT user FROM users WHERE user = '${user}'`;
  const rows = pool.query(query, [user]);

  return rows.length > 0;
}
// UPDATE `users` SET `role` = 'owner' WHERE `users`.`id` = 6;
async function updateRole(user, newRole) {
  const query = `UPDATE users SET role = '${newRole}' WHERE users.id = ${user.id}`;
  const rows = pool.query(query);
  return rows;
}

// DELETE FROM `users` WHERE `users`.`id` = 6
async function deleteUser(user) {
  const query = `DELETE FROM users WHERE users.id = ${user.id}`;
  const rows = pool.query(query);
  return rows;
}

module.exports = { getUsers, registerUser, updateRole, deleteUser };
