// Get all rows in the leaderboard table
const rows = document.querySelectorAll('.leaderboard-table tbody tr');

// Loop through each row
rows.forEach(row => {
    // Loop through each cell in the row
    row.querySelectorAll('td').forEach((cell, index, cells) => {
        // Get the cell content
        const content = cell.textContent.trim();

        // Check if it's "1st"
        if (index !== 0 && content === '1st') {
            // Add a class for styling to the current cell
            cell.classList.add('first');
        }

        // Check if it's the final column and content is "2nd"
        if (index === cells.length - 1 && content === '2nd') {
            // Add a class for styling to the current cell
            cell.classList.add('second');
        }

        // Check if it's the final column and content is "3rd"
        if (index === cells.length - 1 && content === '3rd') {
            // Add a class for styling to the current cell
            cell.classList.add('third');
        }
    });
});