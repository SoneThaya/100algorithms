function alphaShift(str) {
  let newStr = str.replace(/[a-z]/gi, char => {
    if (char == "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt(0) + 1);
    }
  });
  return newStr;
}

console.log(alphaShift("crazy"));

//solution 2

function alphabeticShift2(i) {
  return i
    .split("")
    .map(a => a.charCodeAt(0) + 1)
    .map(b => String.fromCharCode(b))
    .join("")
    .replace(/{/g, "a");
}

console.log(alphabeticShift2("crazy"));

// solution 3

function alphabeticShift3(inputString: string): string {
  const wordArray: string[] = inputString.split("");
  const charCodeArray: number[] = wordArray.map(char => {
    if (char === "z") {
      char = "a";
      return char.charCodeAt(0);
    }
    return char.charCodeAt(0) + 1;
  });
  return charCodeArray.map(c => String.fromCharCode(c)).reduce((a, b) => a + b);
}

console.log(alphabeticShift3("crazy")); // dsbaz
console.log(alphabeticShift3("labradoodle")); // m
