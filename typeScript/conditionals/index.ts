window.setTimeout(() => {
  const age = Number(prompt("What is your age?"));

  if (age < 0) {
    alert("Something went wrong, you must put a positive age");
  } else if (age === 21) {
    console.log(" Happy 21st birthday!! and Your age is odd!");
  } else if (age % 2 === 1) {
    console.log("Your age is odd!");
  } else if (Number.isInteger(Math.sqrt(age))) {
    console.log("perfect square");
  } else {
    console.log("you have nothing special, sorry");
  }
}, 500);
