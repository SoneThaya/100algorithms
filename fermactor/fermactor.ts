function fermactor(n: number): number[] {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < i; j++) {
            const total = Math.pow(i, 2) - Math.pow(j, 2);

            if (total === n) {
                return [i, j];
            }
        }
    }
}

console.log(fermactor(15));

// solution 2

function fermactor2(num: number): number[] {
 
    let firstNum: number = Math.ceil(Math.sqrt(num));
    let secondNum: number = firstNum - num;
    let perfectSquare: boolean = isSquare(secondNum);
 
    while (perfectSquare !== true) {
        firstNum++;
        secondNum = firstNum - num;
        perfectSquare = isSquare(secondNum);
    }
    
 
    function isSquare(n) {
        return  n > 0 && Math.sqrt(n) % 1 === 0;
    }
 
    return [Math.sqrt(firstNum), secondNum];
}
 
console.log(fermactor2(15));