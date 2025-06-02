//Challenge 1: Write a function called sumOfPositives that takes an array of numbers and returns the sum of all the positive numbers in the array
function sumOfPositives(arr: number[]): number {
   let sum: number = 0;
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum; 
}
//console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));

//challenge 2: Find Max Value
function findMax(arr: number[]): number {
    let max = arr[0];
    for (let i=1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
} 
console.log(findMax([3, 7, 2, 9, 5]));