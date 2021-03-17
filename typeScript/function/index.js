const num = parseInt(prompt("Choose a number"));
const isEven = (num) => {
    return num % 2 === 0;
};
const factorial = (num) => {
    let sum = 1;
    for (let i = 2; i <= num; i++) {
        sum *= i;
    }
    return sum;
};
console.log(isEven(num));
console.log(factorial(num));
const word = prompt("Choose a word");
const kebabToSnake = (word) => {
    const neWord = word.replace(/-/g, "_");
    return neWord;
};
console.log(kebabToSnake(word));
