const mysql = require('mysql');
const utils = require('util');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'utn-ba',
});

pool.query = utils.promisify(pool.query);

module.exports = pool;
