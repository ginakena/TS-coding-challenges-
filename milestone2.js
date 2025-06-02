//Challenge 1: Write a function called sumOfPositives that takes an array of numbers and returns the sum of all the positive numbers in the array
function sumOfPositives(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
//challenge 2: Find Max Value
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
;
function findWinner(candidates) {
    var winner = candidates[0];
    for (var i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
    return winner;
}
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];
//console.log(findWinner(candidates)); 
//challenge 4: Find the longest word
function findLongestWord(words) {
    var longestword = words[0];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestword.length) {
            longestword = words[i];
        }
    }
    return longestword;
}
//console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
//challenge 5: Write a function called countProperties that takes an object and returns the number of properties (keys) it has.
function countProperties(object) {
    return Object.keys(object).length;
}
//console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
//challenge 6: Filter by length
function filterByLength(array, minlength) {
    var filteredArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length >= minlength) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
//console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
//challenge 7: Sum of Even Numbers
function sumOfEvenNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
//console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));
//challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(array) {
    var evenArray = array.filter(function (i) { return i % 2 === 0; });
    var oddArray = array.filter(function (i) { return i % 2 !== 0; });
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 0; i < evenArray.length; i++) {
        sumEven += evenArray[i];
    }
    for (var i = 0; i < oddArray.length; i++) {
        sumOdd += oddArray[i];
    }
    return sumEven - sumOdd;
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
