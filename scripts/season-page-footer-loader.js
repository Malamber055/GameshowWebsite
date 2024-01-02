// Function to load the header.html content
function loadFooter() {
    fetch('../pages/season-page-footer.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        });
  }
    
  loadFooter();