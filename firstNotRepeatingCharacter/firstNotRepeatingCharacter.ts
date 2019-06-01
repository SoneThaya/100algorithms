function firstNotRepeatingCharacter(s: string): string {
    const chars: string[] = s.split('');
    let duplicates = {};
    let answer = '_';
    let indexAnswer = Number.MAX_SAFE_INTEGER;

    chars.forEach((element, index) => {
        if (!duplicates.hasOwnProperty(element)) {
            duplicates[element] = {
                count: 1,
                index
            }
        } else {
            duplicates[element].count++;
            duplicates[element].index = index;
        }
    })

    for (const key in duplicates) {
        if (duplicates[key]. count === 1 && duplicates[key].index < indexAnswer) {
            answer = key;
            indexAnswer = duplicates[key].index;
        }
    }


    return answer;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));

// solution 2

function firstNotRepeatingCharacter2(str: string): string {
    let obj = {};
 
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj.hasOwnProperty(str[i])) ? obj[str[i]] + 1 : 0;
    }
    
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 0) return str[i];
    }
    return '_';
}
 
console.log(firstNotRepeatingCharacter2('abacabad'));
console.log(firstNotRepeatingCharacter2('abacabaababacaba'));
console.log(firstNotRepeatingCharacter2('aaaaaaaaaacbbbbbbbb'));
