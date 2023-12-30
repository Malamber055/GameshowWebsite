// Function to load the header.html content
function loadHeader() {
    fetch('../header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
}

// Call the function to load the header when the script is executed
loadHeader();