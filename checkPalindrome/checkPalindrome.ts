function checkPalindrome(inputString: string): boolean {
    const originalWord = inputString.toLowerCase();
    const reversedWord = originalWord.split('').reverse().join('');

    return originalWord === reversedWord;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

// solution 2

function checkPalindrome2(word: string): boolean {
 
    let start: number = 0;
    let end: number = word.length - 1;
 
    while (start !== end) {
        if (word[start] === word[end]){
            start++;
            end--;
        } else {
            break;
        }
    }
 
    return start === end;
}
 
 
console.log(checkPalindrome2('aabaa'));
console.log(checkPalindrome2('abac'));
console.log(checkPalindrome2('a'));
console.log(checkPalindrome2('palindrome'));
console.log(checkPalindrome2('level'));
