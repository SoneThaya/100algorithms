function encloseInBrackets(inputString: string): string {
    return `(${inputString})`;
}

console.log(encloseInBrackets('abacaba'));

function encloseInBrackets2(str:string): string {
    return `(${str})`;
}
console.log(encloseInBrackets2('abacaba'));