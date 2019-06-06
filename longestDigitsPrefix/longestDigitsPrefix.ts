function longestDigitsPrefix(inputString: string): string {
    
    const chars = inputString.split('');
    let prefix = '';

    for (let char of inputString) {
        const num = parseInt(char);

        if (isNaN(num)) {
            break;
        }
        prefix += char;
    }

    return prefix;
}

console.log(longestDigitsPrefix('123aa1'));


// solution 2

function longestDigitsPrefix2(str: string): string {
 
    let prefix: string = str.replace(/[a-zA-Z]/g, '@');
    let nonDigit: number = prefix.indexOf('@');
    return prefix.slice(0, nonDigit);
}
 
console.log(longestDigitsPrefix2('123aa1'));