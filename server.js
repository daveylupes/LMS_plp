// server.js
const express = require('express');
const session = require('express-session');
const bcrypt = require('bycrypt');
const bodyParser = require('body-parser');
const mysql =require('mysql');
const { check, validationResult } = require(express-validator);
const app = express();

// Configure session middleware
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learning_management'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection,threadId);
})

// Serve static files from the default directory
app.use(express.static(_dirname));

// Set up middleware to parse incoming JSON data
