const homePlusOne = document.querySelector(".home-plus-one");
const homePlusTwo = document.querySelector(".home-plus-two");
const homePlusThree = document.querySelector(".home-plus-three");
const awayPlusOne = document.querySelector(".away-plus-one");
const awayPlusTwo = document.querySelector(".away-plus-two");
const awayPlusThree = document.querySelector(".away-plus-three");
let homeScore = document.querySelector(".home-score");
let awayScore = document.querySelector(".away-score");
let newGame = document.querySelector(".new-game-btn");

let homeTotal = 0;
let awayTotal = 0;

// Adding the click event to home side buttons to add up Home Score

homePlusOne.addEventListener("click", function () {
  homeTotal += 1;
  homeScore.textContent = homeTotal;
});
homePlusTwo.addEventListener("click", function () {
  homeTotal += 2;
  homeScore.textContent = homeTotal;
});
homePlusThree.addEventListener("click", function () {
  homeTotal += 3;
  homeScore.textContent = homeTotal;
});

// Adding the click event to AWAY side buttons to add up AWAY Score

awayPlusOne.addEventListener("click", function () {
  awayTotal += 1;
  awayScore.textContent = awayTotal;
});
awayPlusTwo.addEventListener("click", function () {
  awayTotal += 2;
  awayScore.textContent = awayTotal;
});
awayPlusThree.addEventListener("click", function () {
  awayTotal += 3;
  awayScore.textContent = awayTotal;
});

// Resetting the game back to 0 when the New Game button is clicked

newGame.addEventListener("click", function () {
  homeTotal = 0;
  awayTotal = 0;
  homeScore.textContent = homeTotal;
  awayScore.textContent = awayTotal;
});
