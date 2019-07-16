function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);

    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

//solution 2

function arrayMaximalAdjacentDifference2(arr: number[]): number {
  if (arr.length == 2) return Math.abs(arr[0] - arr[1]);

  let maxDifference: number = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i < arr.length; i++) {
    maxDifference = Math.max(maxDifference, Math.abs(arr[i - 1] - arr[i]));
  }

  return maxDifference;
}

console.log(arrayMaximalAdjacentDifference2([2, 4, 0, 1]));
console.log(arrayMaximalAdjacentDifference2([2, 8, 0, -2]));
console.log(arrayMaximalAdjacentDifference2([2, 5, 7, 9]));
