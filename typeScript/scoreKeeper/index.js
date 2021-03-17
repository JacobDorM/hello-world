window.setTimeout(() => {
    const p1Button = document.querySelector("#p1");
    const p2Button = document.getElementById("p2");
    const resetButton = document.getElementById("reset");
    let p1Display = document.querySelector("#p1Display");
    let p2Display = document.querySelector("#p2Display");
    const numInput = document.querySelector("input");
    const winningScoreDisplay = document.querySelector("p span");
    let p1Score = 0;
    let p2Score = 0;
    let gameOver = false;
    let winningScore = 5;
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
