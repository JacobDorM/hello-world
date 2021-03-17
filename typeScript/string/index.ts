window.setTimeout(() => {
  let strSucces: string = prompt("Are we there yet?");

  while (strSucces.indexOf("yes") === -1) {
    strSucces = prompt("Are we there yet?");
  }

  alert("Yay, we finally made it!");
}, 500);
