function digitDegree(n: number): number {
    let count = 0;
    let currentNumber = n;

    if (n <= 9) {
        return count;
    } else {
        while (true) {
            count++;
            currentNumber = getDigit(currentNumber);

            if (currentNumber <= 9) {
                break;
            }
        }
    }

    return count;
}

function getDigit(num: number) {
    const nums: number[] = num.toString().split('').map((element) => parseInt(element));
    return nums.reduce((a, b) => {
        return a + b;
    })
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));

// solution 2

function digitDegree2(num: number): number {
 
    let counter: number = 0; 
    let strNum: any = num.toString();
    
    while (strNum.length > 1) {
        strNum = strNum.split('').reduce((total, element) => { return +total + +element;}).toString();
        counter++;        
    }
 
    return counter;
}
 
console.log(digitDegree2(5));
console.log(digitDegree2(100));
console.log(digitDegree2(91));