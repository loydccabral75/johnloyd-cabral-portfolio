// main.js - JavaScript functionality

// Simple DOM Manipulation Example (Change background color on button click)
document.addEventListener('DOMContentLoaded', function() {
    const changeBgButton = document.createElement('button');
    changeBgButton.textContent = 'Change Background Color';
    document.body.appendChild(changeBgButton);

    changeBgButton.addEventListener('click', function() {
        document.body.style.backgroundColor = '#ffcccb'; // Change to light pink
    });
});
