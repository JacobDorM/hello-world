const num: number = parseInt(prompt("Choose a number"));

const isEven: (num: number) => boolean = (num: number) => {
  return num % 2 === 0;
};

const factorial: (num: number) => number = (num: number) => {
  let sum: number = 1;

  for (let i: number = 2; i <= num; i++) {
    sum *= i;
  }

  return sum;
};

console.log(isEven(num));
console.log(factorial(num));

const word: string = prompt("Choose a word");

const kebabToSnake = (word: string) => {
  const neWord: string = word.replace(/-/g, "_");
  return neWord;
};

console.log(kebabToSnake(word));
