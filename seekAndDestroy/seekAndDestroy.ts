function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
   return arr1.filter((element) => !arr2.includes(element));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));

// solution 2

function seekAndDestroy2(initialArray: number[], itemsToBeRemoved: number[]): number[] {
 
  let results: number[] = [], obj = {};

  for (let i = 0; i < itemsToBeRemoved.length; i++) {
      obj[itemsToBeRemoved[i]] = i;
  }

  for (let i = 0; i < initialArray.length; i++) {
      if (!obj.hasOwnProperty(initialArray[i])) {
          results.push(initialArray[i]);
      }
  }

  return results;
}

console.log(seekAndDestroy2([3,5,1,2,2],[2,3,5]));
console.log(seekAndDestroy2([1,2,3,5,1,2,3],[2,3]));

