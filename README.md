# CSV File Upload Project

This project allows users to upload CSV files, search data within the files, and display the results in a table format on the web interface. It also provides features like client-side searching, dynamic table population, and error handling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **File Upload**: Users can upload CSV files using a file input form.
- **Search Functionality**: Users can search for specific terms within a chosen column of the CSV data.
- **Client-Side Searching**: The application allows users to search and filter data on the client-side without reloading the page.
- **Dynamic Table Population**: The table dynamically updates to display the search results or the original data.
- **Error Handling**: Error messages are displayed to users for invalid file uploads or failed search requests.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, jQuery, Bootstrap
- **Backend**: Node.js, Express.js
- **File Upload Handling**: Multer
- **CSV Parsing**: csv-parser

## Installation

To run the project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/shouvikbj/csv-file-upload-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd csv-file-upload-project
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open a web browser and go to `http://localhost:3000` to access the application.

3. Upload a CSV file using the file input form.

4. Use the search form to search for specific terms within the data.

## Folder Structure

The project follows a standard folder structure:

csv-file-upload-project/

|- client/

| |- index.html

| |- script.js

| |- styles.css

|

|- server/

| |- controllers/

| | |- dataController.js

| | |- uploadController.js

| |

| |- models/

| | |- File.js

| |

| |- routes/

| | |- index.js

| |

| |- uploads/

|

|- package.json

|- server.js

|- README.md



## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to contribute new features, improvements, or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
