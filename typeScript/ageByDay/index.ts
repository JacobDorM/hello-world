window.setTimeout(() => {
  const yearAge: number = parseInt(prompt("what is your age by years?"));
  const dayAge: number = yearAge * 365.25;

  alert(`${yearAge} years is roughly ${dayAge} days`);
}, 500);
