function sumOddFibonacciNums(num: number): number {
  let result = 0;
  let previous = 0;
  let current = 1;

  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }

    const nextCurrent = current + previous;
    previous = current;
    current = nextCurrent;

  }

  return result;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));

// solution 2

function sumAllOddFibonacciNumbers2(num: number): number {
    
  let fib: number[] = [1,1];
  
  for(let i = 2; i < num; i++) {
      if( fib[i-2] + fib[i-1] > num) break;
      fib[i] = fib[i-2] + fib[i-1];
  }

  return fib.filter((element)=>{return element % 2 != 0}).reduce((total, element)=>{return total += element});

}

console.log(sumAllOddFibonacciNumbers2(10));
console.log(sumAllOddFibonacciNumbers2(1000));