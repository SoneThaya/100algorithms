function allLongestStrings(inputArray: string[]): string[] {
    let longestLength = 0;
    const longestWords = [];

    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    inputArray.forEach((word: string) => {
        if (word.length === longestLength) {
            longestWords.push(word);
        }
    })

    return longestWords;

}

console.log(allLongestStrings2(["aba", "aa", "ad", "vcd", "aba"]));

function allLongestStrings2(arr: string[]): string[] {
 
    let lengthsArray: number[] = arr.map(word => word.length);
    let biggestWordLength: number = Math.max(...lengthsArray);
    return arr.filter(((element) => {return element.length === biggestWordLength}));
 
}
 
 
console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(allLongestStrings(['bb','aaa','sdisdjiaosjd']));
console.log(allLongestStrings(['alpha', 'alpha', 'beta', 'alpha', 'alpha']));