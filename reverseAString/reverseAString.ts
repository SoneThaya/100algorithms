function reverseAString(str: string): string {
  return str.split('').reverse().join('');
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));

// solution 2

function reverseAString2(str: string): string {
  let reversedWord = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedWord += str[i];
  }

  return reversedWord;
}

console.log(reverseAString2('hello'));
console.log(reverseAString2('Howdy'));