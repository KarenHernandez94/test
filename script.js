// Prompt for the visitor's name
var visitorName = prompt("Please enter your name:");

// Alert to welcome the visitor
alert("Welcome to the site, " + visitorName + "!");

// Function to personalize the page
window.onload = function() {
    if (visitorName) {
        // Update the welcome message in the header
        document.querySelector('header h1').innerText = "Welcome to my Personal Page, " + visitorName + "!";
    }
};

