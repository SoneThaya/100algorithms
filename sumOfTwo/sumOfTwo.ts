function sumOfTwo(a: number[], b: number[], v: number): boolean {
  const hashMap = {};

  for (let num of a) {
    const difference = v - num;
    hashMap[difference] = difference;
  }

  for (let num of b) {
    if (hashMap.hasOwnProperty(num)) {
      return true;
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));

// solution 2

function sumOfTwo2(arrayOne: number[], arrayTwo: number[], target: number): boolean {
 
  let obj1 = {}, obj2 = {};

  for (let i = 0; i < arrayOne.length; i++) {
      if (!obj1.hasOwnProperty(arrayOne[i])) obj1[arrayOne[i]] = i;
  }

  for (let i = 0; i < arrayTwo.length; i++) {
      if (!obj2.hasOwnProperty(arrayTwo[i])) obj2[arrayTwo[i]] = i;
  }

  for (let i = 0; i < arrayOne.length; i++) {
      if (obj2.hasOwnProperty(target - (obj1[arrayOne[i]]))) return true;
  }

  return false;

}

console.log(sumOfTwo2([1,2,3], [10,20,30,40], 42));