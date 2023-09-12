let SECRET_NUMBER = Math.floor(Math.random() * 11); // Between 0-10
let maxCount = 10;
let counter = 0;
let recordGuesses = [];
let playerName = prompt("Hello! What's your name?");
let playerRecord = {};

function guessNum() {
  while (maxCount > 0) {
    let guess = prompt("Hi " + playerName + "! Guess a whole number between 0 and 10!");
    let number = Number(guess);

    if (isNaN(number)) {
      alert("Sorry " + playerName + ". You need to guess a number, not a string!");
    } else if (number < SECRET_NUMBER) {
      alert("Sorry " + playerName + '. The Number is too low :(, try again');
    } else if (number > SECRET_NUMBER) {
      alert("Sorry " + playerName + '. The Number is too high :(, try again');
    } else {
      counter++;
      recordGuesses.push(number);

      if (!playerRecord[playerName] || counter < playerRecord[playerName]) {
        playerRecord[playerName] = counter;
        alert("Great job, " + playerName + "! You got it in " + counter + ' attempts!!! :D Your guess was ' + recordGuesses + '! Way to go!');
      } else {
        alert(playerName + ', You got it in ' + counter + ' attempts, but your best score is ' + playerRecord[playerName] + ' attempts! Try to beat it next time!');
      }

      let playAgain = confirm('Would you like to play again?');
      if (playAgain) {
        SECRET_NUMBER = Math.floor(Math.random() * 11); // Between 0-10
        maxCount = 5;
        counter = 0;
        recordGuesses = [];
      } else {
        endGame(true);
        return;
      }
    }
    maxCount--;
    counter++;
    recordGuesses.push(number);
  }
  alert('You ran out of attempts, ' + playerName + '. :( The number was ' + SECRET_NUMBER);
  endGame(false);
}

function endGame(newHighScore) {
  if (newHighScore) {
    alert("Congratulations " + playerName + "! You just beat your previous best score of " + playerRecord[playerName] + " and now have a new best score of " + counter + "!");
    playerRecord[playerName] = counter;
  }
  //updates best score
}
guessNum(); //start game