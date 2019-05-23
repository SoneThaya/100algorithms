function compareIntegers(a: string, b: string): string {
    return parseInt(a) > parseInt(b) ? 'greater' : parseInt(a) < parseInt(b) ? 'less' : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));

// solution 2

function compareIntegers2(str1: string, str2: string): string {
 
    let num1: number = +str1, num2: number = +str2;
 
    return (!num1 || !num2) ? 'not a digit' : (num1 === num2) ? 'equal' : (num1 > num2) ? 'greater' : 'less';
 
}
 
 
console.log(compareIntegers2('12', '13'));
console.log(compareIntegers2('875', '799'));
console.log(compareIntegers2('1000', '1000'));
console.log(compareIntegers2('1000', 'b'));
console.log(compareIntegers2('a', '1000'));
console.log(compareIntegers2('a', 'c'));