function companyBotStrategy(trainingData: number[][]): number {
    let time = 0;
    let correctness = 0;

    trainingData.forEach((data: number[]) => {
        if (data[1] === 1) {
            time += data[0];
            correctness += data[1]
        }
    });

    return time / correctness || 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));

// solution 2

function companyBotStrategy2(arr: number[][]): number {
 
    let totalTime: number = 0, correctAnswers: number = 0;
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === 1) {
            totalTime += arr[i][0];
            correctAnswers++;
        }
    }
 
    return totalTime / correctAnswers || 0;
 
}
 
console.log(companyBotStrategy2([[3,1],[6,1],[4,1],[5,1]]));
console.log(companyBotStrategy2([[4,1],[4,-1],[0,0],[6,1]]));
console.log(companyBotStrategy2([[4,-1],[0,0],[5,-1]])); 
