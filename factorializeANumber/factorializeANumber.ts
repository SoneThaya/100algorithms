function factorializeANumber(num: number): number {
    let total = 1;

    for (let i = 1; i <= num; i++){
        total *= i;
    }

    return total;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

// solution 2

function factorializeANumber2(num: number): number {
    return (num === 1) ? 1 : num * factorializeANumber(num - 1);
}
 
 
console.log(factorializeANumber2(5));
console.log(factorializeANumber2(10));