function evenDigitsOnly(n: number): boolean {
    const digits = n.toString().split('');

    return digits.every((digit) => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));

// solution 2

function evenDigitsOnly2(num: number): boolean {
    return num.toString().split('').filter((element) => {return +element % 2 !== 0}).length === 0;
}
 
console.log(evenDigitsOnly2(248622));
console.log(evenDigitsOnly2(642386));
console.log(evenDigitsOnly2(1234567890));
console.log(evenDigitsOnly2(2468));