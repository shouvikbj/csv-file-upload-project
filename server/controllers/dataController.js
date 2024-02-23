// server/controllers/dataController.js

const fs = require('fs');
const csvParser = require('csv-parser');

// Function to read data from a CSV file
const readCSVFile = (filePath) => {
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

// Function to search for data in a CSV file
const searchCSVFile = async (filePath, columnName, searchTerm) => {
  try {
    const data = await readCSVFile(filePath);
    const filteredData = data.filter(row => row[columnName].includes(searchTerm));
    return filteredData;
  } catch (error) {
    throw error;
  }
};

module.exports = { readCSVFile, searchCSVFile };
