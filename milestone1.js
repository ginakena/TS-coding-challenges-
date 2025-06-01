//Sum of two numbers
function addition(num1, num2) {
    return num1 + num2;
}
//console.log(addition(3, 5));
//console.log(addition(-6, 9));
//convert minutes to seconds
function convert(int) {
    return int * 60;
}
//console.log(convert(5));
//perimeter of a rectangle
function findPerimeter(length, width) {
    return (length + width) * 2;
}
//console.log(findPerimeter(6, 7));
//console.log(findPerimeter(20, 10));
//challenge 4: Checking negative
function isNegative(int) {
    if (int < 0) {
        return true;
    }
    return false;
}
//console.log(isNegative(-23));
//console.log(isNegative(55));
//challenge 5: canDrive
function canDrive(name, age) {
    if (age >= 18) {
        return "".concat(name, " is old enough to drive");
    }
    else {
        return "".concat(name, " is not old enough to drive");
    }
}
//console.log(canDrive("jane", 22));
//console.log(canDrive("june", 17));
//challenge 6: Finding the largest number
function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}
//console.log(findLargest(5, 9, 3));
//console.log(findLargest(-1, -5, -3)); 
//challenge 7: Bmi Calculator
function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    var category = "";
    if (BMI < 18.5) {
        category = "underweight";
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        category = "Normal weight";
    }
    else if (BMI >= 25 && BMI < 29.9) {
        category = "overweight";
    }
    else {
        category = "Obese";
    }
    return category;
}
//console.log(calculateBMI(68, 1.75));
//console.log(calculateBMI(85, 1.8));
//challenge 8: Greeting based on time
function greetUser(name, hour) {
    if (hour >= 5 && hour <= 12) {
        return "Good morning, ".concat(name, "!");
    }
    else if (hour >= 12 && hour <= 17) {
        return "Good afternoon, ".concat(name, "!");
    }
    else if (hour >= 18 && hour <= 21) {
        return "Good evening, ".concat(name, "!");
    }
    else {
        return "Good night, ".concat(name, "!");
    }
}
//console.log(greetUser("Regina",9)); 
//challenge 9: Write a function called fizzBuzzCheck
function fizzBuzzCheck(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    else if (num % 3 === 0) {
        return "Fizz";
    }
    else if (num % 5 === 0) {
        return "Buzz";
    }
    return num.toString();
}
//console.log(fizzBuzzCheck(15));  
// console.log(fizzBuzzCheck(9));   
// console.log(fizzBuzzCheck(10));  
// console.log(fizzBuzzCheck(7));
//challenge 10: finding perimeter of shapes
function perimeter(shape, num) {
    var perimeter;
    if (shape === "s") {
        perimeter = 4 * num;
    }
    else if (shape === "c") {
        perimeter = 6.28 * num;
    }
    return perimeter;
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
