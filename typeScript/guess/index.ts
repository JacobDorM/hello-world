window.setTimeout(() => {
  const secretNumber: number = 4;

  const guess: number = Number(prompt("Guess a number"));

  if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
  } else if (guess > secretNumber) {
    alert("Too high, Guess again!");
  } else {
    alert("Too low, Guess again!");
  }
}, 500);
