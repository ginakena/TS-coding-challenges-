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
//console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6])); 
//challenge 9: Count truthly
function countTruthy(object) {
    var count = 0;
    for (var key in object) {
        if (object[key]) {
            count += 1;
        }
    }
    return count;
}
//console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
//challenge 10: Average of numbers
function average(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
// console.log(average([2, 4, 6, 8]));
// console.log(average([0]));
//challenge 11: Linear Search
function linearSearch(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value)
            return i;
    }
    return -1;
}
// console.log(linearSearch([5, 3, 7, 1, 4], 7));
// console.log(linearSearch([5, 3, 7, 1, 4], 10));
//challenge 12: Reverse Linear Search
function reverseLinearSearch(array, target) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
// console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
// console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));
//challenge 13: Linear Search All
function linearSearchAll(array, target) {
    var indices = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
            indices.push(i);
        }
    }
    return indices;
}
// console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));
// console.log(linearSearchAll([5, 3, 7, 1, 4], 10));
//challenge 14: Count occurences
function countOccurrences(array) {
    var object = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        object[item] = (object[item] || 0) + 1;
    }
    return object;
}
//console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));
//challenge 15: Remove Duplicates
function removeDuplicates(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var isDuplicated = false;
        for (var j = 0; j < newArray.length; j++) {
            if (array[i] === newArray[j]) {
                isDuplicated = true;
                break;
            }
        }
        if (!isDuplicated) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
//chalenge 16: Most frequent value
function mostFrequent(array) {
    var counts = {};
    var maxCount = 0;
    var mostFrequentItem = array[0];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var item = array_2[_i];
        counts[item] = (counts[item] || 0) + 1;
        if (counts[item] > maxCount) {
            maxCount = counts[item];
            mostFrequentItem = item;
        }
    }
    return mostFrequentItem;
}
console.log(mostFrequent([1, 2, 3, 2, 4, 1, 2]));
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));
