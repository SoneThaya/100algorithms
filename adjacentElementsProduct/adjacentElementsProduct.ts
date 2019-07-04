function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++){
        const product = inputArray[i] * inputArray[i + 1];

        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));


function adjacentElementsProduct2(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1];
     inputArray.reduce((a, b) => {
       if (a * b > largestProduct) largestProduct = a * b;
       return b;
     });
    return largestProduct;
  }
  console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3]));

  // solution 3

 // The map method multiplies the adjacent values, filter is just there to remove the final   value of "undefined" (from multiplying the last number in the array by undefined).

function adjacentElementsProduct3(inputArray: number[]): number {
    const productArray: number[] = inputArray.map((num, index) => {
        if (index < inputArray.length - 1) {
            return num * inputArray[index + 1];
        }
    }).filter((num) => num !== undefined);
    return Math.max(...productArray);
}
 
console.log(adjacentElementsProduct3([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct3([23, 18, -2, -25, 17, 13])); // 414
console.log(adjacentElementsProduct3([6, -12, -5, 2, 3])); // 60
console.log(adjacentElementsProduct3([61, 7, -21, -5, 17, 32, 12, -6, 81, 4])); // 544