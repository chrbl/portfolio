// Get reference to the text field
const textField = document.getElementById('inputField');

// Variable to hold the interval ID for the auto-entry
let autoEntryInterval;

// Function to start auto-entry
function startAutoEntry() {
    autoEntryInterval = setInterval(() => {
        // Append a dot to the text field
        textField.value += '.';
    }, 333); // 1/3 second
}

// Function to stop auto-entry
function stopAutoEntry() {
    clearInterval(autoEntryInterval);
}

// Variable to track typing state
let typingTimer;

// Event listener for input event on the text field
textField.addEventListener('input', () => {
    // Clear the typing timer
    clearTimeout(typingTimer);
    
    // Check if the user is typing
    if (textField.value === '') {
        // If not, start auto-entry
        startAutoEntry();
    } else {
        // If typing, stop auto-entry and set a timer to restart it after 1/3 second
        stopAutoEntry();
        typingTimer = setTimeout(startAutoEntry, 333);
    }
});

// Start auto-entry when the page loads
startAutoEntry();
