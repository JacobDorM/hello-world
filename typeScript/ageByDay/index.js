window.setTimeout(() => {
    const yearAge = parseInt(prompt("what is your age by years?"));
    const dayAge = yearAge * 365.25;
    alert(`${yearAge} years is roughly ${dayAge} days`);
}, 500);
