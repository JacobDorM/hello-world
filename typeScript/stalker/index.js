window.setTimeout(() => {
  const firstName = prompt("what is your first name?");
  const lastName = prompt("what is your last name?");
  const userAge = prompt("what is your age?");
  const fullName = firstName + " " + lastName;
  console.log("your full name is " + fullName);
  console.log("you are " + userAge + " years old");
}, 500);
