function alternatingSums(a: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  a.forEach((element, index) => {
    if (index % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  });

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

// Solution 2

function alternatingSums2(a: number[]): number[] {
  return a.reduce(
    (acc, val, i) => {
      acc[i % 2] = acc[i % 2] + val;
      return acc;
    },
    [0, 0]
  );
}

console.log(alternatingSums2([50, 60, 60, 45, 70]));

// solution 3

function alternatingSums3(a: number[]): number[] {
  const oddIndexSums: number = a
    .filter((num, index) => index % 2 === 0)
    .reduce((x, y) => x + y);
  const evenIndexSums: number = a
    .filter((num, index) => index % 2 !== 0)
    .reduce((x, y) => x + y);
  return [oddIndexSums, evenIndexSums];
}

console.log(alternatingSums3([50, 60, 60, 45, 70])); // [18
