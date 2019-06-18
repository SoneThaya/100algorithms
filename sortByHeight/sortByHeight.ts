function sortByHeight(a: number[]): number[] {
  const array2 = a.filter((element) => {
    if (element !== -1) {
      return element;
    }
  }).sort((num1, num2) => num1 - num2);

  let indexVal = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = array2[indexVal];
      indexVal++;
    }
  }

  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// solution 2

function sortByHeight2(heights){
 
  let sortedHeights: number[] = [], result: number[] = [];
  let sortedHeightsIndex = 0;

  for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== -1) sortedHeights.push(heights[i]);
  }

  sortedHeights = sortedHeights.sort();

  for (let i = 0; i < heights.length; i++) {
      (heights[i] === -1) ? result.push(-1) : result.push(sortedHeights[sortedHeightsIndex++]);
  }


  return result;

}

console.log(sortByHeight2([-1, 150, 190, 170, -1, -1, 160, 180]));