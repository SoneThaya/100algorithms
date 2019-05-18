function isCaseInsensitivePalindrome(inputString: string): boolean {
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = originalLowerCase.toLowerCase().split('').reverse().join('');

    return originalLowerCase === reversedWord;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));

// solution 2

function caseInsensitivePalindrome(word: string): boolean {
    if (word.length <= 1) return true;
    return word.split('').reverse().join('').toLowerCase() === word.toLowerCase();
}
 
console.log(caseInsensitivePalindrome('AaBaa'));
console.log(caseInsensitivePalindrome('aabaa'));
console.log(caseInsensitivePalindrome('abaac'));