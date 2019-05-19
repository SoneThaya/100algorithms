function characterParity(symbol: string): string {
   const result = parseInt(symbol);

   return isNaN(result) ? 'not a digit' : result % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))

// solution 2

function characterParity2(char: string): string {
    if (!+char) return 'not a digit';
    return (+char % 2 === 0) ? 'even' : 'odd';
}
 
console.log(characterParity2('5'));
console.log(characterParity2('8'));
console.log(characterParity2('q'));
console.log(characterParity2('0'));