function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split("");
  const charValues: number[] = [];

  chars.forEach((char: string) => {
    charValues.push(char.charCodeAt(0));
  });

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));

// solution 2

function alphabetSubsequence2(s: string): boolean {
  //My Solution
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= s.charCodeAt(i + 1)) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence2("zab"));
console.log(alphabetSubsequence2("effg"));
console.log(alphabetSubsequence2("cdce"));
console.log(alphabetSubsequence2("ace"));
console.log(alphabetSubsequence2("bxz"));
