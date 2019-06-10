function pigLatin(str: string): string {
  const letters = str.split('');
  const vowelRegex = /[aeiou]/;

  if (vowelRegex.test(str[0])) {
    return `${str}way`;
  }

  while (true) {
    if (!vowelRegex.test(letters[0])) {
      const firstConstanent = letters.splice(0, 1);
      letters.push(firstConstanent);
    } else {
      break;
    }
  }
  str = letters.join('') + 'ay';

  return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));

// solution 2

function pigLatin2(str: string): string {
 
  let vowels = {'a': 'a', 'e': 'e', 'i': 'i', 'o': 'o', 'u': 'u'};

  if (vowels.hasOwnProperty(str[0])) { return str + 'way'; } 
  
  let firstVowelIndex: number;
  for (let i = 0; i < str.length; i++) {
      if (vowels.hasOwnProperty(str[i])) {
          firstVowelIndex = i;
          break;
      }
  }
  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';

}

console.log(pigLatin2('glove'));
console.log(pigLatin2('eight'));