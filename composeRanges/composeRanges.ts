function composeRanges(nums: number[]): string[] {

    if(nums.length < 1){
        return [];
    }

    const ranges: any[] = [{start: nums[0], end: nums[0]}];

    for (let i = 1; i < nums.length; i++){
        if(ranges[ranges.length - 1].end + 1 === nums[i]){
            ranges[ranges.length - 1].end = nums[i];
        } else {
            ranges.push({start: nums[i], end: nums[i]});
        }
    }

    for(let i = 0; i < ranges.length; i++){
        if(ranges[i].start !== ranges[i].end){
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        } else {
            ranges[i] = ranges[i].start.toString();
        }
    }

    return ranges;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));

// solution 2

function composeRanges2(arr) {
    const ranges = [];
 
    for (let i = 0; i < arr.length;) {
        const first = arr[i];
        let last, j = 1;
 
        while (first + j === arr[j + i]) {
            last = arr[j + i];
            j++;
        }
        ranges.push(last ? `${first}->${last}` : first);
        i += j;
    }
    return ranges;
}
console.log(composeRanges2([-1, 0, 1, 2, 6, 7, 9]));//[ '-