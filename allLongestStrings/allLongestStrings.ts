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

// solution 2


function allLongestStrings2(arr: string[]): string[] {
 
    let lengthsArray: number[] = arr.map(word => word.length);
    let biggestWordLength: number = Math.max(...lengthsArray);
    return arr.filter(((element) => {return element.length === biggestWordLength}));
 
}
 
 
console.log(allLongestStrings2(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(allLongestStrings2(['bb','aaa','sdisdjiaosjd']));
console.log(allLongestStrings2(['alpha', 'alpha', 'beta', 'alpha', 'alpha']));

// solution 3

function allLongestStrings3(inputArray) {

    return inputArray.reduce((longest, str) => {
  
      if (longest.length === 0) {
  
        longest.push(str);
  
      } else {
  
        if (longest[0].length < str.length) {
  
          longest[0] = str;
  
        }
  
        if (longest[0].length === str.length) {
  
          longest.push(str);
  
        }
  
      }
  
      return longest;
  
    }, []);
  
  }

console.log(allLongestStrings3(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(allLongestStrings3(['bb','aaa','sdisdjiaosjd']));
console.log(allLongestStrings3(['alpha', 'alpha', 'beta', 'alpha', 'alpha']));