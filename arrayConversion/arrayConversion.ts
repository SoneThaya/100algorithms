function arrayConversion(inputArray: number[]): number {
    let isOdd = true;

    while(inputArray.length !== 1){
        inputArray = sumProduct(inputArray, isOdd);
        isOdd = !isOdd;
    }

    return inputArray[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[]{
    const sumProducts: number[] = [];

    if(isOdd){
        for(let i = 0; i < nums.length; i += 2){
            sumProducts.push(nums[i] + nums[i + 1]);
        }
    } else {
        for (let i = 0; i < nums.length; i += 2){
            sumProducts.push(nums[i] * nums[i + 1]);
        }
    }

    return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

// solution 2

function arrayConversion2(arr: number[]): number {
    function reduce(arr){
        let tempArray: number[] = [];
        for (let i = arr.length; i > 0; i -= 2){
            action === true ? tempArray.push(arr.pop() + arr.pop()) : tempArray.push(arr.pop() * arr.pop());                
        }
        action = !action;
        return tempArray;
    }
 
    let action: boolean = true;
    while (arr.length > 1){
        arr = reduce(arr);
    }
 
    return arr[0];
}
 
console.log(arrayConversion2([1,2,3,4,5,6,7,8]));
 