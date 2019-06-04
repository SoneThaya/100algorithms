function isLucky(n: number): boolean {
    const luckyN = n.toString();
    const half = luckyN.length / 2;

    const firstHalf = getTotal(luckyN.substring(0, half));
    const secondHalf = getTotal(luckyN.substring(half, luckyN.length));
    return firstHalf === secondHalf;
}

function getTotal(n: string) {
    return n.split('').map((char) => parseInt(char)).reduce((num1, num2) => num1 + num2);
}

console.log(isLucky(1230));
console.log(isLucky(239017));

// solution 2

function isLucky2(num: number): boolean {
    let firstHalfSum: number = 0, secondHalfSum: number = 0, strNum: string = num.toString();
 
    for (let i = 0; i < strNum.length; i++) {
        ( i < strNum.length / 2) ? firstHalfSum += +strNum[i] : secondHalfSum += +strNum[i];
    }
 
    return firstHalfSum === secondHalfSum;
}
 
console.log(isLucky2(1230));
console.log(isLucky2(239017));
 





// Internal Backups

function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    const fileIds: number[] = [];

    for (let change of changes) {
        const fileBackuptime = change[0];

        if (fileBackuptime > lastBackupTime) {
            if (!fileIds.includes(change[1])) {
                fileIds.push(change[1]);
            }
            
        }
    }

    return fileIds.sort((a, b) => a - b);
}

console.log(incrementalBackups(461620205, [[461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]]))