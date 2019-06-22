function sumAllPrimes(num: number): number {
  let primesTotal = 0;

  for (let i = 2; i < num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i ===j) {
        primesTotal += i;
      }

      if (i % j === 0) {
        break;
      }
    }
  }

  return primesTotal;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));

// solution 2

function sumAllPrimes2(num: number): number {
    
  let primes: number[] = [];

  for (let i = 2; i <= num; i++) {

      let isPrime = true;
      for (let j = 2; j <= i; j++) {
          if (i % j == 0 && j != i) isPrime = false;
      }
      
      if (isPrime == true) primes.push(i);
  }

  return primes.reduce((total, element) => {return total += element});

 

}

console.log(sumAllPrimes2(10));
console.log(sumAllPrimes2(977));