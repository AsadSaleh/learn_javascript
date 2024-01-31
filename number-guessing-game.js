const readline = require('readline');

// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startGame() {
  console.log('Welcome to the Number Guessing Game!');
  console.log('I have selected a number between 1 and 100. Your task is to guess the correct number.');

  askForGuess();
}

function askForGuess() {
  rl.question('Enter your guess: ', (userInput) => {
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess)) {
      console.log('Please enter a valid number.');
    } else {
      checkGuess(userGuess);
    }
  });
}

function checkGuess(guess) {
  if (guess === secretNumber) {
    console.log(`Congratulations! You guessed the correct number (${secretNumber}).`);
    rl.close();
  } else if (guess < secretNumber) {
    console.log('Too low! Try again.');
    askForGuess();
  } else {
    console.log('Too high! Try again.');
    askForGuess();
  }
}

// Start the game
startGame();