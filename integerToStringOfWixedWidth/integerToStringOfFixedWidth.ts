function integerToStringOfFixedWidth(number: number, width: number): string {
    let stringifiedNum = number.toString();
    const numberWidth = stringifiedNum.length;
    const widthDiff = width - numberWidth;

    if (numberWidth < width) {
        
        let padStart = '';

        for (let i = 0; i < widthDiff; i++) {
            padStart = padStart.concat('0');
        }

        return padStart.concat(stringifiedNum);
    }

    if (number < width) {

        return stringifiedNum.substring(widthDiff, stringifiedNum.length);
    }

    return stringifiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

// solution 2

function integerToStringOfFixedWidth2(digits: number, size: number): string {
 
    let strDigits: string = digits.toString();
 
    if (strDigits.length < size) {
        return addDigits(strDigits, size); 
    } else if (strDigits.length > size) {
        return removeDigits(strDigits, size);
    } else {
        return strDigits;
    } 
 
    function addDigits(str: string, targetLength: number): string {
        let padding: string = '';
        for (let i = 0; i < (targetLength - str.length); i++) {
            padding += '0';
        }
        return padding + str;
    }
 
    function removeDigits(str: string, targetLength: number): string {
        return str.slice(str.length - targetLength);
    }
}
 
console.log(integerToStringOfFixedWidth2(1234, 2));
console.log(integerToStringOfFixedWidth2(1234, 4));
console.log(integerToStringOfFixedWidth2(1234, 5));
