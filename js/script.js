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
//
// let favColour = prompt("What's your fav colour?");
//
// if (favColour == "blue") {
//   console.log("Cool, blue is the colour of the sky");
// } else if (favColour == "red" || favColour == "maroon") {
//   console.log("Volcanoes are that colour!");
// } else {
//   console.log("That's not bad");
// }

// Create a prompt which asks for your movie review (out of 5 stars)
// Once the user enters their number, display their choice with a console log.
// For example: "Your review: 4/5 stars."
// If the user writes less than 3, return a log saying "Not a great movie"
// If the user writes in 3, return a log saying "Average movie"
// If the user writes in 4 or 5, return a log saying "It was a great movie"
// If the user writes in a number greater then 5, return a log saying "You're too high - Try again"
//
// let review = prompt("Enter a review out of 5 stars");
// console.log(`Your review: ${review}/5`);
// if (review < 3 ) {
//   console.log(`Not a great movie`);
// }else if (review == 3) {
//   console.log(`Average movie`);
// }else if (review >= 4 && review < 6 ) {
//   console.log(`It was a great movie`);
// }else if (review > 5) {
//   console.log(`You're too high - Try again`);
// } else {
//   console.log(`You need to enter a number`);
// }

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

// let coin = Math.floor(Math.random() * 2);

// in short:
// let side;
//
// if (coin == 1){
//   side = "heads";
// }else{
//   side = "tails";
// }
//
// let guess = prompt(`Coin flipper game. Guess heads or tails!`);
//
// if (guess == side) {
//   console.log(`You guessed ${guess}, it was correct!`);
// } else {
//   console.log(`Uh oh. You guessed ${guess}, the coin was ${side}!`);
// }

// Random numbers
// math.random is always a number between 0 and 1
// but it can't be 1

// let randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);

// Activity:
// Create a loop, which runs 100 times.
// Console 100 random numbers between 0 - 100.

// for (let i=0; i<100; i++){
//   console.log(Math.floor(Math.random() * 20)+1);
// }
//
// Task:
// Create a guessing game which prompts you for a number.
// You have to guess a number between 1 and 6.
// If you guessed it right it says "nice one"
// If you guessed lower it will say "you guessed lower"
// Same goes for higher it will say "you're too high"
//
// Extra: if you guessed anything else (i.e. a word)
// return a console log: "enter a number between 1-6"
//q
// Task 2:
// After you've guessed, show the two numbers on the screen
// using bootstrap icons.
// I.e. you guessed: 6, the number was 4
//
// // answer
// let result = document.getElementById("result");
// let guess = prompt("Guess a number between 1 and 6");
//
// const number = Math.floor((Math.random() * 6) + 1);
// result.innerHTML = `
//   <p>Your guess:<i class="bi bi-dice-${guess}"></i></p>
//   <p>The number:<i class="bi bi-dice-${number}"></i></p>
// `
// if (guess == number) {
//   result.innerHTML += `<h2>You guessed it spot on!</h2>`;
// }else if (guess < number) {
//   result.innerHTML += `<h2>You guessed lower!</h2>`;
// } else {
//   result.innerHTML += `<h2>You guessed higher!</h2>`;
// }

// -----------------Parse ints------------------

// let num1 = parseInt(prompt("enter a number"));
// let num2 = parseInt(prompt("enter another number"));
//
// console.log(num1 + num2);

// ----------------Function arguments----------------

// function greeting(adjective, name){
//   console.log(`Hello ${name}, you're ${adjective}`);
// }
// greeting("hungry", "tim");

// number adder
// function numberAdder(num1, num2){
//   let result = num1 + num2;
//   console.log(result);
// }
// numberAdder(5,9);

// Practice: build a function which multiplies two numbers together.
// Use a function argument.

function numberMultiplier(number1, number2) {
    let result = (number1 / number2) + 100;
    console.log(result);
}

let num1 = 5;
let num2 = 6;

numberMultiplier(num1, num2);

// Activity:
// Build a function which divides two numbers and then adds 100.
// Declare each number with variables.
//
// Activity:
// Create a function which, using prompts, asks the user for a name and city.
// Use a function argument to console log a message with your name and city.
// E.g. Hi [Name], you live in [City].

// let name = prompt("what's your name");
// let city = prompt("whats your city");
//
// greeting(name, city);
//
// function greeting(name, city){
//   console.log(`${name}, ${city}`);
// }

// -----------------CLOUD-----------------

// (~OnO)~ YOU CAN DO IT! ~(OuO~)

// Read the following article on function arguments:
// https://www.w3schools.com/js/js_function_parameters.asp
//
// Create a function which, using prompts, asks the user for a product name, a product imageURL, and a price in $.
// Use a function argument to display a product on the screen with the product name, product image (taken from the URL), and the price in $.
// Also show the price on "special", which is a deal - which is the normal price divided by 2.
//
// E.g.
// [Product image]
// Tuna - Regular Price: $2.50.
// Price on special! $1.25"
