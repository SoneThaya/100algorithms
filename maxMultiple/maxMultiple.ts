function maxMultiple(divisor: number, bound: number): number  {
    let remainder = bound % divisor;

    return bound - remainder;
}

console.log(maxMultiple2(3,10));

// solution 2

function maxMultiple2(divisor: number, bound: number): number {
    return divisor * Math.floor(bound / divisor);
}
 
console.log(maxMultiple(3, 10));
console.log(maxMultiple(3, 30));
console.log(maxMultiple(3, 29));
console.log(maxMultiple(3, 16));