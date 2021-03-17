window.setTimeout(() => {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        document.body.style.background = document.body.style.background === "purple" ? "white" : "purple";
    });
    button.addEventListener("click", () => {
        document.body.classList.toggle("purple");
    });
}, 1);
