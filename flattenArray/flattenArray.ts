function flattenArray(arr: any[]): any[] {
    const oneArray = [];

    flatten(arr);

    function flatten(arr: any[]) {
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                flatten(element)
            } else {
                oneArray.push(element);
            }
        })
    }

    return oneArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

// solution 2

function flattenArray2(arr: any[]): any[] {
    return arr.toString().replace(/,/g, '').split('').map((element) => { return (parseInt(element)) ? +element : element; });
}
 
 
console.log(flattenArray2([[['a'],['b']]]));
console.log(flattenArray2([1, [2], [3, [[4]]]]));
console.log(flattenArray2([[['a', [[[[1]]]]], 2]]));
 
