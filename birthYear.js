// Prompt user for their name
const userName = prompt("Please enter your name:");

// Prompt user for their age
const userAge = prompt("Please enter your age:");

// Get current year
const currentYear = new Date().getFullYear();

// Calculate year of birth
const yearOfBirth = currentYear - parseInt(userAge);

// Display the result
alert(`Hello ${userName}! You were born in ${yearOfBirth}.`); 