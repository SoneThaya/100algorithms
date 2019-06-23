function squareDigitsSequence(a0: number): number {
  let count = 1;

  const uniqueNums = [a0];

  while (true) {
    count++;
    a0 = digitPower(a0);

    if (uniqueNums.includes(a0)) {
      return count;
    }

    uniqueNums.push(a0);

  }

}

function digitPower(num: number): number {
  const digits = num.toString().split('').map((element) => parseInt(element) ** 2);
  const sum = digits.reduce((a, b) => a + b);

  return sum;
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));

// solution 2

function squareDigitalSequence2(num: number): number {
 
  let sequence = [];
  sequence.push(num);
  let i = 0, nextValue = "", total = 0;

  while (true){
      nextValue = sequence[i].toString().split("");
      for (let j = 0; j < nextValue.length; j++){
          total += Math.pow(parseInt(nextValue[j]), 2)
      }
      if (sequence.includes(total)){
          sequence.push(total);
          break;
      } else {
          sequence.push(total);
          i++;
          total = 0;
      }
  }
  return sequence.length;

}

console.log(squareDigitalSequence2(16));
console.log(squareDigitalSequence2(103));
