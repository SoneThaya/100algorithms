function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   inputArray.forEach((element, index) => {
       if(element === elemToReplace){
           inputArray[index] = substitutionElem;
       }
   })
   return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));

// solution 2

function arrayReplace2(arr: number[], targetElement: number, newElement: number) {
 
    arr.forEach((currentValue, index, actualArray) => { 
        actualArray[index] === targetElement ? actualArray[index] = newElement : actualArray[index] = currentValue; 
    });
 
    return arr;
}
 
console.log(arrayReplace2([1,2,1, 8, 1], 1, 3));