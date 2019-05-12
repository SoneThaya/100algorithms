function alternatingSums(a: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((element, index) => {
        if(index % 2 === 0){
            evenSum += element;
        } else {
            oddSum += element;
        }
    });

    return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))

// Solution 2

function alternatingSums2(a: number[]): number[] {
    return a.reduce((acc, val, i) =>  {
      acc[i % 2] = acc[i % 2] + val;
      return acc
    }, [0, 0]);
  }

  console.log(alternatingSums2([50, 60, 60, 45, 70]))