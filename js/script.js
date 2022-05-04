// ----CLOUD-----
//
// Create a text input on the page, with a label of “Add a new sport”.
// Create a button which says “Submit”.
// When the user clicks on the button, push() the text to an array called sports
// Each new click of “Submit” should update a list of sports on the page.
// Extra task: style the list of sports to make it look cool.
//
// Hint:
// Look at the last project we did in class to see how to get a value of an input and put it into a variable.

// const sportArray = [];
// const sportInputElement = document.getElementById('sport-input');
// const buttonElement = document.getElementById('button');
// const resultElement = document.getElementById('result');
//
// buttonElement.onclick = function(){
//   // resultElement.innerHTML = "";
//   let sport = sportInputElement.value;
//   sportArray.push(sport);
//   for (let i = 0; i < sportArray.length; i++) {
//     resultElement.innerHTML += `
//     <p>
//       ${sportArray[i]}
//     </p>
//     `
//   }
// }

// }
// const artists = [
// // index 0
// "James Blake",
// // index 1
// "Lada Gaga"
// ];

// Activity:
// Create an array called colours.
// Include 4 colours in your array.
// Use a loop to show the colours on the screen.
// E.g. "red, orange, blue, purple"

// const coloursArray = [
//   "red",
//   "blue",
//   "green",
//   "purple",
//   "orange"
// ];
//
// const resultElement = document.getElementById('result');
//
// for(let i=0; i < coloursArray.length; i++){
//   resultElement.innerHTML += `
//   <h3>${coloursArray[i]}</h3>
//   `
// }
//
// Activity:
// Create a text input on the page, with a label of “Add a new flower."
// Create a button which says “Submit”.
// When the user clicks on the button, push() the text to an array called flowers.
// Each new click of “Submit” should update a list of flowers on the page.

// Declare a boolean
// let hungry = false;
//
// if (hungry == true){
//   console.log("You're hungry");
// } else {
//
// }
//
// let floorNumber = prompt("Which floor are you on?");
//
// if (floorNumber == 1){
//   console.log(`You're at the rugby sports school thing.`);
// } else if (floorNumber == 2) {
//   console.log(`You're at Yoobee.`);
// } else if (floorNumber == 3) {
//   console.log(`You're at the Beauty Therapy place.`);
// } else {
//   console.log(`You entered ${floorNumber}, I have no idea where you actually are.`);
// }
//
// let grade = prompt("Please enter a grade")
// if (grade < 50) {
//   console.log("You failed");
// } else if (grade >= 50 && grade < 65) {
//   console.log("You passed, you did ok.");
// } else if (grade >= 65 && grade < 90) {
//   console.log("You're pretty smart");
// } else if (grade >= 90) {
//   console.log("You're a genius");
// } else {
//   console.log("enter the number again between 0 and 100");
// }

// Create a prompt which asks for your favorite color.
//
// - If the user writes in blue, return a log saying "Cool - oceans are blue."
// - If the user writes in red, return a log saying "Cool - volcanoes are red."
// - If the user writes anything else, return a log saying "Hmm that's not bad."

let favColour = prompt("What's your fav colour?");

if (favColour == "blue") {
  console.log("Cool, blue is the colour of the sky");
} else if (favColour == "red" || favColour == "maroon") {
  console.log("Volcanoes are that colour!");
} else {
  console.log("That's not bad");
}

// Create a prompt which asks for your movie review (out of 5 stars)
// Once the user enters their number, display their choice with a console log.
// For example: "Your review: 4/5 stars."
// If the user writes less than 3, return a log saying "Not a great movie"
// If the user writes in 3, return a log saying "Average movie"
// If the user writes in 4 or 5, return a log saying "It was a great movie"
// If the user writes in a number greater then 5, return a log saying "You're too high - Try again"

let review = prompt("Enter a review out of 5 stars");
console.log(`Your review: ${review}/5`);
if (review < 3 ) {
  console.log(`Not a great movie`);
}else if (review == 3) {
  console.log(`Average movie`);
}else if (review >= 4 && review < 6 ) {
  console.log(`It was a great movie`);
}else if (review > 5) {
  console.log(`You're too high - Try again`);
} else {
  console.log(`You need to enter a number`);
}

// Read the W3Schools article:
// https://www.w3schools.com/jsref/jsref_random.asp
//
// Build a coin flipper - based on a random number.
// Generate a number between 1 and 2.
// 1 is equal to heads. 2 is equal to tails.
//
// Make it so you can guess either "heads" or "tails"
// Do this with a prompt.
// If you guessed right, console log "You win!"
// Otherwise, console log "You lose!"
//
// Final step:
// Console log the coin flip and your own guess.
// E.g. "You guessed tails. The coin was heads. You lose."
