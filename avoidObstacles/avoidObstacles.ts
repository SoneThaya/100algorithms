function avoidObstacles(inputArray: number[]): number {
    inputArray = inputArray.sort((a, b) => a - b);
    const largestArrayVal = inputArray[inputArray.length - 1];

    for (let i = 1; i <= largestArrayVal + 1; i++){
        if(inputArray.every((element) => element % i !== 0)){
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

// SOLUTION 2

function avoidObstacles2(arr: number[]): number {
 
    let minJump: number = 2;
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % minJump === 0) {
            minJump++;
            i = 0;
        }
    }
    return minJump;
}
 
 
console.log(avoidObstacles2([5,3,6,7,9]));