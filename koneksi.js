const mysql = require('mysql');
//menyambung ke database 
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'restapi',
});

conn.connect((err) => {
  if(err) throw err;
  console.log('mysql terkoneksi dengan database.');
});
module.exports = conn;
