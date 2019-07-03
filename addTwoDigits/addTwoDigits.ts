function addTwoDigits(n: any): number {
    const nums = n.toString().split('');

    return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));

function addTwoDigits2(num: any): number {
    let arr: string[] = num.toString().split('');
    return (+arr[0]) + (+arr[1])
}

console.log(addTwoDigits2(29));

// solution 2
function addTwoDigits3(num: number): number {
    let arr: string[] = num.toString().split('');
    return (+arr[0]) + (+arr[1]);
}
 
 
 
console.log(addTwoDigits3(29));
console.log(addTwoDigits3(11));
console.log(addTwoDigits3(44));