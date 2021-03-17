window.setTimeout(() => {
  let numSquares: number = 6;
  let colors: any[] = [];
  let pickedColor: any;
  const squares: NodeListOf<HTMLElement> = document.querySelectorAll(".square");
  const colorDisplay: HTMLElement = document.getElementById("colorDisplay");
  const messageDisplay: Element = document.querySelector("#message");
  const h1: HTMLHeadingElement = document.querySelector("h1");
  const resetButton: Element = document.querySelector("#reset");
  const modeButtons: NodeListOf<Element> = document.querySelectorAll(".mode");

  const init: () => void = () => {
    setupModeButtons();
    setupSquares();
    reset();
  };

  const setupModeButtons: () => void = () => {
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

  const setupSquares: () => void = () => {
    for (let i = 0; i < squares.length; i++) {
      // add click listeners to squares
      squares[i].addEventListener("click", function () {
        // gra color of clicked square
        const clickedColor: any = this.style.backgroundColor;
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

  const reset: () => void = () => {
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

  const changeColors: (color: any) => void = (color: any) => {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
      // change each color to match given color
      squares[i].style.backgroundColor = color;
    }
  };

  const pickColor: () => any = () => {
    const random: number = Math.floor(Math.random() * colors.length);
    return colors[random];
  };

  const generateRandomColors: (num: any) => any[] = (num: any) => {
    // make an array
    const arr: any[] = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
      arr.push(randomColor());
      // get random color and push into arr
    }
    // return that array
    return arr;
  };

  const randomColor: () => string = () => {
    // pick a "red" from -255
    const r: number = Math.floor(Math.random() * 256);
    // pick a "green" from -255
    const g: number = Math.floor(Math.random() * 256);
    // pick a "blue" from -255
    const b: number = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  };

  init();
}, 0.1);
