function palindromeRearranging(inputString: string): boolean {
    const chars = inputString.split('');
    const charCount = {};
    let oddCount = 0;

    for (let char of chars) {
        if (charCount.hasOwnProperty(char)) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let key in charCount) {
        if(charCount[key] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount > 1 ? false : true;
}

console.log(palindromeRearranging('aabb'));

// solution 2

function palindromeRearranging2(str: string): boolean {
    let word = str.split('').sort(), obj = {}, uniqueValues = 0;
 
    for (let i = 0; i < word.length; i++) {
        (obj.hasOwnProperty(word[i])) ? obj[word[i]]++ : obj[word[i]] = 1;
    }
 
    for (let i = 0; i < str.length; i++) {
        uniqueValues += (obj[str[i]] % 2);
        obj[str[i]] = 0;
    }
 
    return uniqueValues < 2;
}
 
console.log(palindromeRearranging2('aabb'));
console.log(palindromeRearranging2('hello'));
console.log(palindromeRearranging2('rcearca'));
console.log(palindromeRearranging2('Nazareth'));
console.log(palindromeRearranging2('sssstw'));
console.log(palindromeRearranging2('level'));
 