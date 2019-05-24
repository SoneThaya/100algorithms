function confirmEnding(str: string, target: string) {
   const start = str.length - target.length;

   return str.substr(start) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));

// solution 2

function confirmEnding2(bigWord: string, smallWord: string): boolean {
    return bigWord.substring(bigWord.length - smallWord.length) === smallWord;
}
 
console.log(confirmEnding2('Abstraction', 'action'));
console.log(confirmEnding2('Open sesame', 'pen'));