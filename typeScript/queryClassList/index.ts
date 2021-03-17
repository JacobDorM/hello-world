window.setTimeout(() => {
  const lis = document.querySelectorAll("li");

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", () => {
      this.classList.add("selected");
    });

    lis[i].addEventListener("mouseout", () => {
      this.classList.remove("selected");
    });
    lis[i].addEventListener("click", () => {
      this.classList.toggle("done");
    });
  }
}, 1);
