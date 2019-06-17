function shapeArea(n: number): number {
  let area = 1;

  for (let i = 1; i < n; i++) {
    area += 4 * i;
  }

  return area;
}

console.log(shapeArea(2));
console.log(shapeArea(3));

// solution 2

function shapeArea2(value: number): number {
  return Math.pow(value,2) + Math.pow(value - 1, 2);
}

console.log(shapeArea2(1));
console.log(shapeArea2(2));
console.log(shapeArea2(3));
console.log(shapeArea2(4));
