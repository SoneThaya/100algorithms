function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    let failedAttempts = 0;

    for (let attempt of attempts) {
        if (failedAttempts = attempt === passcode ? 0 : failedAttempts++);

        if (failedAttempts === 10) {
            return true;
        }
    }

    return false;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));

// solution 2

function incorrectPasswordAttempts2(passcode: string, attempts: string[]) {
 
    let counter: number = 0, item: number = 0;
    return checkAttempts(attempts);
 
    function checkAttempts(attempts) {
        console.log(counter);
        if (attempts[item] === passcode) counter = 0;
        if (attempts[item] !== passcode) counter++;
        if (counter >= 10) return true;
        if (item >= attempts.length) return false;
        item++;
        return checkAttempts(attempts);
    }
 
}

console.log(incorrectPasswordAttempts2(
    '1111' ,['1111','4444','9999','3333','8888','2222','7777','0000','6666','7285','5555','1111']
 ));
 console.log(incorrectPasswordAttempts2(
     '1111' ,['1111','4444','9999','3333','8888','2222','7777','0000','6666','7285','1111']
  ));
  