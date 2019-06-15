function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
  const colDiff = nCols - col + 1;
  const rowDiff = nRows - row;

  return colDiff * rowDiff;
}

console.log(seatsInTheater(16, 11, 5, 3));

// solution 2

function seatsInTheater2(nCols: number, nRows: number, col: number, row: number): number {
 
  return ((nCols - col) + 1) * (nRows - row);

}

console.log(seatsInTheater2(16,11,5,3));