// Prompt for the visitor's name 
var visitorName = prompt("Please enter your name:");

// Alert to welcome the visitor
alert("Welcome to the site, " + visitorName + "!");

// Function to personalize the page
window.onload = function() {
    if (visitorName) {
        // Update the welcome message in the header
        const welcomeMessage = document.querySelector('header h1');
        welcomeMessage.innerText = "Welcome to my Personal Page, " + visitorName + "!";
    }
};

// Optional: If you want to clear the welcome message if the visitor does not provide a name
if (!visitorName) {
    alert("You didn't enter a name, so the welcome message will not be personalized.");
}


