window.setTimeout(() => {
  let numLoop: number = -10;
  let numEven: number = 10;
  let numOdd: number = 300;
  let numDivisible: number = 5;

  while (numLoop <= 19) {
    console.log(numLoop);
    numLoop++;
  }

  while (numEven <= 40) {
    console.log(numEven);
    numEven += 2;
  }

  while (numOdd <= 333) {
    if (numOdd % 2 === 1) {
      console.log(numOdd);
    } else;

    numOdd++;
  }

  while (numDivisible <= 50) {
    if (numDivisible % 5 === 0 && numDivisible % 3 === 0) {
      console.log(numDivisible);
    }

    numDivisible++;
  }
}, 500);
