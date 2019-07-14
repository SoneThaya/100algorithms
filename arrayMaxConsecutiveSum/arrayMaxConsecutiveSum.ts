function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }

  max = sum;

  for (let i = k; i < inputArray.length; i++) {
    sum -= inputArray[i - k];
    sum += inputArray[i];
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

// solution 2 a

function arrayMaxConsecutiveSum2(
  arr: number[],
  sizeOfElements: number
): number {
  if (sizeOfElements > arr.length) return null;

  let maxSum: number = 0;

  for (let i = 0; i < sizeOfElements; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = 1; i < arr.length - 1; i++) {
    tempSum = tempSum - arr[i - 1] + arr[i + 1];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(arrayMaxConsecutiveSum2([2, 3, 5, 1, 6], 2));
