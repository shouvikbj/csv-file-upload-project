$(document).ready(function() {
    // Global variable to store original CSV data
    var originalCSVData = [];

    // Event listener for the file upload form submission
    $('#uploadForm').submit(function(event) {
        event.preventDefault();

        var formData = new FormData();
        formData.append('csvfile', $('#csvfile')[0].files[0]);

        // Send AJAX request to upload the file
        $.ajax({
            type: 'POST',
            url: '/upload',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                originalCSVData = response.data; // Store original data
                displayCSVData(originalCSVData);
            },
            error: function(xhr, status, error) {
                console.error('Error uploading CSV file:', error);
            }
        });
    });

    // Event listener for the search input
    $('#searchTerm').on('input', function() {
        var searchTerm = $("#searchTerm").val().trim().toLowerCase();
        console.log(searchTerm);
        if (searchTerm === '') {
            displayCSVData(originalCSVData); // Display original data if search term is empty
        } else {
            var searchColumn = $('#searchColumn').val();
            var filteredData = originalCSVData.filter(function(row) {
                return row[searchColumn].toLowerCase().includes(searchTerm);
            });
            displayCSVData(filteredData); // Display filtered data
        }
    });

    // Function to display CSV data in the table
    function displayCSVData(data) {
        var tableHeaders = Object.keys(data[0]);
        var tableBody = '';

        // Clear existing table data
        $('#tableHeaders').empty();
        $('#tableBody').empty();

        // Populate table headers
        tableHeaders.forEach(function(header) {
            $('#tableHeaders').append('<th>' + header + '</th>');
        });

        // Populate table body
        data.forEach(function(row) {
            tableBody += '<tr>';
            tableHeaders.forEach(function(header) {
                tableBody += '<td>' + row[header] + '</td>';
            });
            tableBody += '</tr>';
        });

        $('#tableBody').html(tableBody);
    }
});
