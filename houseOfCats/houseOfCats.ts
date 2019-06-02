function houseOfCats(legs: number): number[] {
    const peopleCount: number [] = [];

    while (legs >= 0) {
        peopleCount.unshift(legs / 2);

        legs -= 4;
    }

    return peopleCount;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));

// solution 2

function houseOfCats2(numOfLegs: number): number[] {
 
    let possibleCombinations: number[] = [];
    return possibleNumOfHumanLegs(numOfLegs);
 
    
    
    function possibleNumOfHumanLegs(num) {
        if (num <= 0) return possibleCombinations;
        possibleCombinations.push(num / 2);
        return possibleNumOfHumanLegs(num - 4);
    }
}
 
console.log(houseOfCats2(6));
console.log(houseOfCats2(2));
console.log(houseOfCats2(10));
