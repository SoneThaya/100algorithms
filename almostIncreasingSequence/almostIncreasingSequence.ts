function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;

    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] <= sequence[i - 1]){
            count++;
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]){
                return false;
            }
        }
    }


    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30]));

// solution 2

function almostIncreasingSequence2(sequence){
 
    let check = 0
     
    function split(seq) {
    for (let i=0;i<seq.length-1;i++) {
     if (seq[i] < seq[i+1]) continue;
     else return;
    }
    check++;
    }
     
    for (let i=0;i<sequence.length-1;i++) {
     if (sequence[i] < sequence[i+1]) continue; 
     else {
     seq1 = sequence.slice(); seq1.splice(i,1); split(seq1)
     seq2 = sequence.slice(); seq2.splice(i+1,1); ; split(seq2)  
     break;     
     }
    }
     
    return check >= 1 ? true : false;
    }
 
 
console.log(almostIncreasingSequence2([1, 3, 2, 1]));
console.log(almostIncreasingSequence2([1, 3, 2]));
console.log(almostIncreasingSequence2([1, 3, 2, 4, 5, 7]));
console.log(almostIncreasingSequence2([40, 50, 60, 10, 20, 30]));

function compareTriplets(a, b) {
    let alice = 0, bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) alice += 1;
        if (a[i] < b[i]) bob += 1
    }
    return [alice, bob]

}

console.log(compareTriplets([17, 28, 39], [99, 16, 8]));
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));