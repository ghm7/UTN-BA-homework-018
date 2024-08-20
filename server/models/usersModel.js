const pool = require('../pool');
const md5 = require('md5');

async function getUser(user, password) {
  try {
    const query = 'SELECT * FROM `users` WHERE 1;';
    const rows = await pool.query(query, [user, md5(password)]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getUser };
