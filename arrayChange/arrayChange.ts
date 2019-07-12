function arrayChange(inputArray: number[]): number {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const difference = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }

  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([9, 1, 1]));

// solution 2

function arrayChange2(arr: number[]): number {
  let turnsNeeded: number = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      turnsNeeded += arr[i - 1] + 1 - arr[i];
      arr[i] = arr[i - 1] + 1;
    }
  }
  return turnsNeeded;
}

console.log(arrayChange2([1, 1, 1]));
console.log(arrayChange2([9, 1, 1]));

// solution 3

function arrayChange3(inputArray: number[]): object {
  let count: number = 0;
  const changedArray: number[] = inputArray.reduce((a: number[], b: number) => {
    const prevNum: number = a[a.length - 1];
    if (prevNum !== undefined && prevNum !== b - 1) {
      const newB: number = prevNum + 1;
      count += Math.abs(b - newB);
      return [...a, newB];
    }
    return [...a, b];
  }, []);
  return {
    array: changedArray,
    counter: count
  };
}

console.log(arrayChange3([1, 1, 1])); // { array: [1, 2, 3], counter: 3}
console.log(arrayChange3([-1, 1, 1])); // { array: [-1, 0, 1], counter: 1}
console.log(arrayChange3([2, 1, 5])); //
