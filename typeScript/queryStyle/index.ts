window.setTimeout(() => {
  const button: HTMLButtonElement = document.querySelector("button");
  const paragraph: HTMLParagraphElement = document.querySelector("p");
  const item: NodeListOf<HTMLLIElement> = document.querySelectorAll("li");

  button.addEventListener("click", () => {
    console.log("SOMEONE CLICKED THE BUTTON!");
    paragraph.textContent = "Someone Clicked the Button!";
  });

  paragraph.addEventListener("click", () => {
    alert("p was clicked");
  });

  paragraph.addEventListener("click", () => {
    paragraph.style.background = "orange";
  });

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
      this.style.color = this.style.color === "pink" ? "blue" : "pink";
    });
  }
}, 1);
