function validTime(time: string): boolean {
  const [hours, minutes] = time.split(':');

  if (parseInt(hours) > 23 || parseInt(hours) < 0) {
    return false
  }

  if (parseInt(minutes) > 59 || parseInt(minutes) < 0) {
    return false;
  }


  return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));

// solution 2

function validTime2(timeString: string): boolean {
 
  let testTime = timeString.split(":");

  if(+testTime[0] >= 24 || +testTime[0] < 0) return false;
  if (+testTime[1] >= 60 || +testTime[1] < 0) return false;

  return true;

}


console.log(validTime2("13:58"));
console.log(validTime2("25:51"));
console.log(validTime2("02:76"));