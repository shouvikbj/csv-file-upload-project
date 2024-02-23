// server/server.js

// Import necessary modules
const express = require('express');
const path = require('path');
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const { validateCSVFile, processCSVFile } = require('./controllers/uploadController');
const { searchCSVFile } = require('./controllers/dataController');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up multer for handling file uploads
const upload = multer({ dest: 'server/uploads/' });

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Upload CSV file endpoint
app.post('/upload', upload.single('csvfile'), async (req, res) => {
  // Check if file was uploaded
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Validate file type
  if (!validateCSVFile(req.file)) {
    return res.status(400).json({ error: 'Invalid file type. Please upload a CSV file.' });
  }

  try {
    // Process uploaded CSV file
    const data = await processCSVFile(req.file.path);
    res.json({ data });
  } catch (error) {
    console.error('Error processing CSV file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Search CSV file endpoint
app.get('/search', async (req, res) => {
  const { file, column, term } = req.query;
  if (!file || !column || !term) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const filePath = `server/uploads/${file}`;
    const searchData = await searchCSVFile(filePath, column, term);
    res.json({ data: searchData });
  } catch (error) {
    console.error('Error searching CSV file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
