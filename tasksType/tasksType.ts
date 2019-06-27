function tasksTypes(deadlines: number[], day: number): number[] {
  let [today, upcoming, later] = [0, 0, 0];

  deadlines.forEach((deadline) => {
    if (deadline <= day) {
      today++;
    } else if (deadline >= day + 1 && deadline <= day + 7) {
      upcoming++;
    } else {
      later++;
    }
  });

  return [today, upcoming, later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));

// solution 2

function taskTypes2(arr: number[], target: number): number[] {
 
  let today: number = 0, upcoming: number = 0, later: number = 0;

  for (let i = 0; i < arr.length; i++){
      if (arr[i] <= target){
          today++;
      } else if (arr[i] > target && arr[i] <= target + 7){
          upcoming++;
      } else {
          later++;
      }
  }

  return [today, upcoming, later];

}

console.log(taskTypes2([1,2,3,4,5], 2));
