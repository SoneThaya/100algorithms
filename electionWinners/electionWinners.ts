function electionsWinners(votes: number[], k: number): number {
    let inTheRunning = 0;
    const mostVotes = Math.max(...votes);
    const sortedVotes = votes.sort((a, b) => b - a);

    if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1;
    }

    votes.forEach((voteCount) => {
        if(mostVotes - voteCount < k) {
            inTheRunning++;
        }
    })

    return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));

// solution 2

function electionWinners2(arr: number[], possibleVotes: number): any {
 
    let candidates: object = {}, maxValue: number = Math.max(...arr);
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + possibleVotes > maxValue) {
            if (candidates.hasOwnProperty(arr[i])) {
                return 'no winners';
            } else {
                candidates[arr[i]] = arr[i];
            }
        }
    }
 
    return Object.keys(candidates).length;
 
}
 
console.log(electionWinners2([2,3,5,2], 3));
console.log(electionWinners2([2,5,5,1], 3));
console.log(electionWinners2([1,2,3,4], 3));