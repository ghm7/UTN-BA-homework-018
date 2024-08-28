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
  const rows = await pool.query(query, [user]);

  return rows.length > 0;
}

module.exports = { getUsers, registerUser };
