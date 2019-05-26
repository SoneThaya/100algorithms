function depositProfit(deposit: number, rate: number, threshold: number): number {
    let year = 0;
    let account = deposit;

    while (threshold > account) {
        account += account * (rate / 100);
        year++;
    }

    return year;
}

console.log(depositProfit(100, 20, 170))

// solution 2

function depositProfit2(deposit: number, rate: number, threshold: number): number {
 
    let years = 0;
 
    while (deposit < threshold) {
        deposit += deposit * (rate / 100);
        years++;
    }
 
    return years;
}
console.log(depositProfit2(100, 20, 170));