function arrayChange(inputArray: number[]): number {
    let count = 0;

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] >= inputArray[i + 1]){
            const difference = (inputArray[i] + 1) - inputArray[i + 1];
            inputArray[i + 1] = inputArray[i] + 1;
            count += difference;
        }
    }

    return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([9, 1, 1]));

function arrayChange2(arr: number[]): number {
 
    let turnsNeeded: number = 0;
 
    for (let i = 1; i < arr.length; i++){
        if (arr[i] <= arr[i - 1]){
            turnsNeeded += (arr[i -1] + 1) - arr[i];
            arr[i] = arr[i - 1] + 1;
        }
    }
    return turnsNeeded;
}
 
console.log(arrayChange2([1,1,1]));
console.log(arrayChange2([9,1,1]));