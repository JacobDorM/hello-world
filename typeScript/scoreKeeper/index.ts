window.setTimeout(() => {
  const p1Button: Element = document.querySelector("#p1");
  const p2Button: HTMLElement = document.getElementById("p2");
  const resetButton: HTMLElement = document.getElementById("reset");
  let p1Display: any = document.querySelector("#p1Display");
  let p2Display: any = document.querySelector("#p2Display");
  const numInput: HTMLInputElement = document.querySelector("input");
  const winningScoreDisplay: Element = document.querySelector("p span");
  let p1Score: number = 0;
  let p2Score: number = 0;
  let gameOver: boolean = false;
  let winningScore: number = 5;

  p1Button.addEventListener("click", () => {
    if (!gameOver) {
      p1Score++;
      if (winningScore === p1Score) {
        p1Display.classList.add("winner");
        gameOver = true;
      }
      p1Display.textContent = p1Score;
    }
  });

  p2Button.addEventListener("click", () => {
    if (!gameOver) {
      p2Score++;
      if (winningScore === p2Score) {
        p2Display.classList.add("winner");
        gameOver = true;
      }
      p2Display.textContent = p2Score;
    }
  });

  resetButton.addEventListener("click", () => {
    reset();
  });

  const reset = () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
  };

  numInput.addEventListener("change", () => {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
  });
}, 1);
