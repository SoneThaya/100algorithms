function commonCharacterCount(s1: string, s2: string): number {
   const s1Chars: string[] = s1.split('');
   const s2Chars: string[] = s2.split('');
   const s1CharCount = getCharList(s1Chars);
   const s2CharCount = getCharList(s2Chars);
   let total = 0;

   for (const prop in s1CharCount){
        if(s2CharCount.hasOwnProperty(prop)){
            if(s2CharCount[prop] < s1CharCount[prop]){
                total += s2CharCount[prop];
            } else {
                total += s1CharCount[prop];
            }
        }
   }

   return total;

}

function getCharList(chars: string[]): object {
    const wordCount = {};

    for (let i = 0; i < chars.length; i++){
        if(wordCount.hasOwnProperty(chars[i])){
            wordCount[chars[i]]++;
        } else {
            wordCount[chars[i]] = 1;
        }
    }

    return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));

// solution 2

function commonCharacterCount2(s1, s2) {
    [s1, s2] = [s1, s2].map(str => {
        const obj = {};
        for (let letter of str) {
            !obj[letter] ? obj[letter] = 1 : obj[letter]++;
        }
        return obj;
    });
    let count = 0;
    for (let prop in s1) {
        if (s2[prop]) {
            s1[prop] < s2[prop] ? count += s1[prop] : count += s2[prop];
        }
    }
    return count;
}
console.log(commonCharacterCount2('aabcc', 'adcaa')); // 3
console.log(commonCharacterCount2('aaaaac', 'bdcea')); // 2