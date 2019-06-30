function absoluteValuesSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

// solution 2

function absoluteValuesSumMinimization2(a: number[]): number {
    return a.reduce((x, y) => {
        const absSumX = a.reduce((b, c) => {
            return (c > x) ? b + (c - x) : b + -(c - x);
        }, 0);
        const absSumY = a.reduce((d, e) => {
            return (e > y) ? d + (e - y) : d + -(e - y);
        }, 0);
        if (absSumX <= absSumY) {
            return x;
        }
        return y;
    });
}
 
console.log(absoluteValuesSumMinimization2([2, 4, 7])); // 4
console.log(absoluteValuesSumMinimization2([2, 4, 7, 6])); // 4
console.log(absoluteValuesSumMinimization2([2, 4, 7, 6, 6])); // 6
console.log(absoluteValuesSumMinimization2([2, 4, 7, 6, 6, 8])); // 6

// solution 3

function absoluteValuesSumMinimization3(a : number[]): number {
    a.sort();
    let median = Math.floor(a.length / 2);
    return a.length % 2 == 0 ? a[median - 1] : a[median];  
}
 
 
 
console.log(absoluteValuesSumMinimization3([2,4,7]));
console.log(absoluteValuesSumMinimization3([2,4,7, 6]));
console.log(absoluteValuesSumMinimization3([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization3([2,4,7, 6, 6, 8]));