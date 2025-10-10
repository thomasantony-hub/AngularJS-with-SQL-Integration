// Import dependencies
const express = require('express');
const mysql = require('mysql2');

// Create Express app
const app = express();

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',    // change if DB is on another host
  user: 'root',         // your MySQL username
  password: '',         // your MySQL password
  database: 'test'    // database name (must exist first)
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL database.');

  // Create table if it does not exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS user (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100)
    )
  `;
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('❌ Failed to create table:', err.message);
    } else {
      console.log('✅ Users table ready.');
    }
  });
});

// Routes
app.get('/', (req, res) => {
  res.status(200).type('text/plain').send('Hello Thomas, MySQL connected!');
});

// Example route to insert data
app.get('/add-user', (req, res) => {
  const sql = `INSERT INTO users (name, email) VALUES ('Thomas', 'thomas@example.com')`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send('Error inserting user.');
    res.send('User inserted successfully.');
  });
});

// Example route to fetch users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send('Error fetching users.');
    res.json(results);
  });
});

// Start server
app.listen(2000, () => {
  console.log('🚀 Server is running on http://localhost:2000');
});
