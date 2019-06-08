function missingLetters(str: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== alphabet[i]) {
            return alphabet[i];
        }
    }

    return undefined;

}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));

// solution 2

function missingLetters2(str: string): string {
 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz', pointer: number = 0;
    return abcSlider(str);
 
    function abcSlider(letters) {
        if (pointer === alphabet.length) return undefined;
        if (alphabet[pointer] !== letters[pointer]) return alphabet[pointer];
        pointer++;
        return abcSlider(letters);
    }
}
 
console.log(missingLetters2('bce'));
console.log(missingLetters2('abce'));
console.log(missingLetters2('abcdefghjklmno'));
console.log(missingLetters2('abcdefghijklmnopqrstuvwxyz'));