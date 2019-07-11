function areSimilar(a: number[], b: number[]): boolean {
  const c: number[] = [];
  let d: number[] = [];

  if (a.toString() === b.toString()) {
    return true;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }

  d = d.reverse();

  if (c.length === 2 && c.toString() === d.toString()) {
    return true;
  }

  return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3], [3, 1, 2]));

// solution 2

function areSimilar2(a, b) {
  if (a.length !== b.length) return false;

  let sortedA = [...a].sort((a, b) => a - b);
  let sortedB = [...b].sort((a, b) => a - b);
  if (sortedA.join("") !== sortedB.join("")) return false;

  let diff = 0;

  a.forEach(function(item, index) {
    if (item != b[index]) diff++;
  });
  return diff > 2 ? false : true;
}

console.log(areSimilar2([1, 2, 3], [1, 2, 3]));
console.log(areSimilar2([1, 2, 3], [2, 1, 3]));
console.log(areSimilar2([1, 2, 2], [2, 1, 1]));

function areSimilar3(a, b) {
  if (a.length !== b.length) return false;

  let sortedA = [...a].sort((a, b) => a - b);
  let sortedB = [...b].sort((a, b) => a - b);
  if (sortedA.join("") !== sortedB.join("")) return false;

  let diff = 0;

  a.forEach(function(item, index) {
    if (item != b[index]) diff++;
  });
  return diff > 2 ? false : true;
}

console.log(areSimilar3([1, 2, 3], [1, 2, 3]));
console.log(areSimilar3([1, 2, 3], [2, 1, 3]));
console.log(areSimilar3([1, 2, 2], [2, 1, 1]));
console.log(areSimilar3([1, 2, 3], [3, 1, 2]));
