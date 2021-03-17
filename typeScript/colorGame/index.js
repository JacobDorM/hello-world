window.setTimeout(() => {
  let numSquares = 6;
  let colors = [];
  let pickedColor;
  const squares = document.querySelectorAll(".square");
  const colorDisplay = document.getElementById("colorDisplay");
  const messageDisplay = document.querySelector("#message");
  const h1 = document.querySelector("h1");
  const resetButton = document.querySelector("#reset");
  const modeButtons = document.querySelectorAll(".mode");
  const init = () => {
    setupModeButtons();
    setupSquares();
    reset();
  };
  const setupModeButtons = () => {
    for (let i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", () => {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
        reset();
      });
    }
  };
  const setupSquares = () => {
    for (let i = 0; i < squares.length; i++) {
      // add click listeners to squares
      squares[i].addEventListener("click", function () {
        // gra color of clicked square
        const clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          resetButton.textContent = "Play Again?";
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
      });
    }
  };
  const reset = () => {
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
      }
    }
    h1.style.background = "steelblue";
  };
  resetButton.addEventListener("click", () => {
    reset();
  });
  const changeColors = (color) => {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
      // change each color to match given color
      squares[i].style.backgroundColor = color;
    }
  };
  const pickColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };
  const generateRandomColors = (num) => {
    // make an array
    const arr = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
      arr.push(randomColor());
      // get random color and push into arr
    }
    // return that array
    return arr;
  };
  const randomColor = () => {
    // pick a "red" from -255
    const r = Math.floor(Math.random() * 256);
    // pick a "green" from -255
    const g = Math.floor(Math.random() * 256);
    // pick a "blue" from -255
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  };
  init();
}, 0.1);
