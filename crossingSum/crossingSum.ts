function crossingSum(matrix: number[][], a: number, b: number): number {
  const columnTotal = matrix[a].reduce((a, b) => a + b);
  let rowTotal = 0;

    for(let i = 0; i < matrix.length; i++){
        rowTotal += i !== a ? matrix[i][b] : 0;
    }

  return columnTotal + rowTotal;
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));

// solution 2

function crossingSum2(arr: number[][], row: number , column: number): number {
 
    let sum: number = 0;
 
    for (let checkRow = 0; checkRow < arr.length; checkRow++) {
        for (let checkColumn = 0; checkColumn < arr[checkRow].length; checkColumn++) {
            if (checkColumn === column && checkRow !== row) {
                sum += arr[checkRow][checkColumn];
            }
            if (checkRow === row){
                sum += arr[checkRow][checkColumn];
            }
        }
    }
 
    return sum;
 
}
 
 
console.log(crossingSum2([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 1, 3));