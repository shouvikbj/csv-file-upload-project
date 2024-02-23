// server/controllers/uploadController.js

const fs = require('fs');
const csvParser = require('csv-parser');

// Function to validate CSV files
const validateCSVFile = (file) => {
  if (!file || !file.mimetype || file.mimetype !== 'text/csv') {
    return false;
  }
  return true;
};

// Function to process and parse uploaded CSV files
const processCSVFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

module.exports = { validateCSVFile, processCSVFile };
