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
// console.log(findMax([3, 7, 2, 9, 5]));

//challenge 3: Election winner
interface Candidate {
  name: string;
  votes: number;
};

function findWinner(candidates: Candidate[]): Candidate {
  let winner = candidates[0];
  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  return winner;
}

const candidates: Candidate[] = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

//console.log(findWinner(candidates)); 

//challenge 4: Find the longest word
function findLongestWord(words: string[]): string {
    let longestword = words[0]
    for (let i=0; i < words.length; i++) {
        if (words[i].length > longestword.length) {
            longestword = words[i];
        }
    }
    return longestword;
}
//console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));

//challenge 5: Write a function called countProperties that takes an object and returns the number of properties (keys) it has.
function countProperties(object: { [key: string]: any}): number {
    return Object.keys(object).length;
}
//console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

//challenge 6: Filter by length
function filterByLength(array: string[], minlength: number): string[] {
  let filteredArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= minlength) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

//console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));

//challenge 7: Sum of Even Numbers
function sumOfEvenNumbers(numbers: number[]): number {
  let sum: number = 0;
  for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
//console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));

//challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(array: number[]): number {
  let evenArray = array.filter(i => i % 2 === 0);
  let oddArray = array.filter(i => i % 2 !== 0);
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < evenArray.length; i++) {
    sumEven += evenArray[i];
  }
  for (let i = 0; i < oddArray.length; i++) {
    sumOdd += oddArray[i];
  }

  return sumEven - sumOdd;
}
//console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6])); 

//challenge 9: Count truthly
function countTruthy(object: Record<string, any>): number {
  let count = 0;
  for (let key in object) {
    if (object[key]) {
      count += 1;
    }
  }
  return count;
}
//console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

//challenge 10: Average of numbers
function average(array: number[]): number { 
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
console.log(average([2, 4, 6, 8]));
console.log(average([0]));





