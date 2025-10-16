const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Soriful@2302',
  database: 'airbnb'
});

module.exports = pool.promise();