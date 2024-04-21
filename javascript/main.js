// Function to update the last updated timestamp
function updateLastUpdated() {
    const now = new Date();
    const formattedDate = now.toLocaleString(); // You can adjust the date format as needed
    document.getElementById('lastUpdated').textContent = formattedDate;
}

// Update the last updated timestamp when the page loads
updateLastUpdated();
