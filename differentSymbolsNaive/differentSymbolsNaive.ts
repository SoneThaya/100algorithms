function differentSymbolsNaive(s: string): number {
    const uniqueChars = new Set();
    const inputChars = s.split('');

    inputChars.forEach((char) => {
        uniqueChars.add(char);
    })

    return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));

// solution 2

function differentSymbolsNaive2(s: string): number {
    const uniqueChars = {};
    const inputChars = s.split('');

    inputChars.forEach((char) => {
        uniqueChars[char] = 1;
    })

    return Object.keys(uniqueChars).length;
}

console.log(differentSymbolsNaive2('cabca'));
