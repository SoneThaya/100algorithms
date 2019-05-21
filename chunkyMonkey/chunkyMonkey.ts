function chunkyMonkey(arr: any[], size: number): any[][] {
    const nested = [];
    let count = 0;

    while (count < arr.length) {
        nested.push(arr.slice(count, count += size));
    }

    return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

// solution 2

function chunkyMonkey2(arr: any, size: number) {
 
    let bigArray = [];
 
    while (arr.length > 0) {
        bigArray.push(arr.splice(0, size));
    }
 
    return bigArray;
}
 
 
console.log(chunkyMonkey2(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey2(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));
console.log(chunkyMonkey2([0,1,2,3,4,5], 4));