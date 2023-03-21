const express = require('express');
const mysql = require('mysql');
const app = express();

//Create database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'p@s5w0rd',
  database: 'formResponse'
});

app.post('/priv/submit', function(req, res) {
  db.getConnection((err, connection) => {
    if (err) {
      console.error('SQL ERROR!: ', err);
      return;
    }

    let query = 'INSERT INTO formResults (';

    query += req.body[0].name;
    for (let i = 0; i < req.body.length; i++) {
      query += ',';
      query += req.body[i].name;
    }

    query += ') values (';

    query += req.body[0].value;
    for (let i = 0; i < req.length; i++) {
      query += ',';
      query += req.body[i].value;
    }
    query += ')';

    connection.query(query, (err, rows) => {
      connection.release();

      if (err) {
        console.error('Error executing query: ', err);
        return;
      }
    })
  })
}) 