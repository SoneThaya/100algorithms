function properNounCorrection(noun: string): string {
   const firstChar = noun[0].toUpperCase();
   const restOfWord = noun.slice(1, noun.length).toLowerCase();

   return firstChar.concat(restOfWord);
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));

// solution 2

function properNounCorrection2(str: string): string {
  return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}


console.log(properNounCorrection2('pARiS'));
console.log(properNounCorrection2('John'));