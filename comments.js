// Create web server
// Create a new express app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const PORT = 3000;

// Set up the express app to use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));