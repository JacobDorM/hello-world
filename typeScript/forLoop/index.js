window.setTimeout(() => {
  for (let i = -10; i <= 19; i++) {
    console.log(i);
  }
  for (let i = 10; i <= 40; i += 2) {
    console.log(i);
  }
  for (let i = 300; i <= 333; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
  for (let i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i);
    }
  }
}, 500);
