window.setTimeout(() => {
  const array: number[] = [1, 1, 1, 1];

  const printReverse: (array: number[]) => void = (array: number[]) => {
    for (let p: number = array.length - 1; p !== -1; p--) {
      console.log(array[p]);
    }
  };

  const isUniform: (array: number[]) => boolean = (array: number[]) => {
    for (let p: number = 1; p < array.length; p++) {
      const index: number = 0;
      if (array[index] !== array[p]) {
        return false;
      }
    }
    return true;
  };

  const sumArray: (array: number[]) => number = (array: number[]) => {
    let sum: number = 0;
    array.forEach((element: number) => {
      sum += element;
    });
    return sum;
  };

  const max: (array: number[]) => number = (array: number[]) => {
    let biggest: number = 0;
    array.forEach((element: number) => {
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
