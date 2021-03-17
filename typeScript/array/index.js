window.setTimeout(() => {
  const array = [1, 1, 1, 1];
  const printReverse = (array) => {
    for (let p = array.length - 1; p !== -1; p--) {
      console.log(array[p]);
    }
  };
  const isUniform = (array) => {
    for (let p = 1; p < array.length; p++) {
      const index = 0;
      if (array[index] !== array[p]) {
        return false;
      }
    }
    return true;
  };
  const sumArray = (array) => {
    let sum = 0;
    array.forEach((element) => {
      sum += element;
    });
    return sum;
  };
  const max = (array) => {
    let biggest = 0;
    array.forEach((element) => {
      if (element > biggest) {
        biggest = element;
      }
    });
    return biggest;
  };
  printReverse(array);
  console.log(isUniform(array));
  console.log(sumArray(array));
  console.log(max(array));
}, 500);
