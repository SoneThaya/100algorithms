function matrixElementsSum(matrix: any[][]): number {
    let priceTotal = 0;
    const bannedIndex: number[] = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                bannedIndex.push(j);
            } else if (!bannedIndex.includes(j)) {
                priceTotal += matrix[i][j];
            }
        }
    }

    return priceTotal;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));

// solution 2

function matrixElementsSum2(arr: number[][]): number {
 
    let marked = {}, sum: number = 0;
    
    arr.forEach((element) => { 
        for (let i = 0; i < element.length; i++) {
            if (element[i] === 0) marked[i] = arr[i];
            if (!marked.hasOwnProperty(element[i])) sum += element[i];
        }
    });
 
    return sum;
 
}
 
console.log(matrixElementsSum2([[0,1,1,2],[0,5,0,0],[2,0,3,3]]));

// solution 3

function matrixElementsSum3(matrix: any[][]): number {
    const rooms = [];
 
    for (let x = 0; x < matrix[0].length; x ++) {
 
        for (let y = 0; y < matrix.length; y ++) {
            if (matrix[y][x] === 0) {
                break;
            } else {
                rooms.push(matrix[y][x]);
            }
        }
    }
 
    return rooms.reduce((a, b) => a + b);
}

console.log(matrixElementsSum3([[0,1,1,2],[0,5,0,0],[2,0,3,3]]));
