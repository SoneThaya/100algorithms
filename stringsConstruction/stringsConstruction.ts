function stringsConstruction(a: string, b: string): number {
  const aCount = getAlphabetCount(a);
  const bCount = getAlphabetCount(b);
  const counts = [];

  for (let char in aCount) {
    if (bCount.hasOwnProperty(char)) {
      counts.push(Math.floor(bCount[char] / aCount[char]));
    } else {
      return 0;
    }
  }

  return Math.min(...counts);

}

function getAlphabetCount(word: string): object {
  const chars = word.split('');
  const alphabetCount = {};

  chars.forEach((char) => {
    if (alphabetCount.hasOwnProperty(char)) {
      alphabetCount[char]++;
    } else {
      alphabetCount[char] = 1;
    }
  });

  return alphabetCount;
}

console.log(stringsConstruction('abc', 'abccba'));

// solution 2

function stringsConstruction2(smallWord: string, bigWord: string): number {
 
  let obj = {};
  let word: string = '';
  let index: number = 0;
  let wordConstruction = [];

  for (let i = 0; i < bigWord.length; i++) {
      (obj.hasOwnProperty(bigWord[i])) ? obj[bigWord[i]]++ : obj[bigWord[i]] = 1;
  }

  while (obj[smallWord[smallWord.length - 1]] !== 0) {
      if (obj[smallWord[index]] > 0) {
          word += smallWord[index];
          obj[smallWord[index]]--;
          index++;
          if (index === smallWord.length) {
              wordConstruction.push(word);
              word = '';
              index = 0;
          }
      } else {
          break;
      }
  }

  return wordConstruction.length;

}

console.log(stringsConstruction2("abc", "abccba"));
console.log(stringsConstruction2("abc", "abccbaabc"));
console.log(stringsConstruction2("abc", "abccbaabcabc"));
console.log(stringsConstruction2("Naz", "Nazareth"));
console.log(stringsConstruction2("a", "aaa"));