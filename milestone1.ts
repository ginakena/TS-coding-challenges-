//Sum of two numbers
function addition(num1: number, num2: number): number {
    return num1 + num2; 
}
//console.log(addition(3, 5));
//console.log(addition(-6, 9));

//convert minutes to seconds
function convert(int: number): number {
    return int * 60;
}
//console.log(convert(5));

//perimeter of a rectangle
function findPerimeter(length: number, width: number): number {
    return (length + width) * 2;
}
//console.log(findPerimeter(6, 7));
//console.log(findPerimeter(20, 10));

//challenge 4: Checking negative
function isNegative(int: number): boolean {
    if (int < 0) {
        return true;
    }
    return false;
}
//console.log(isNegative(-23));
//console.log(isNegative(55));

//challenge 5: canDrive
function canDrive(name: string, age: number): string {
    if (age >= 18) {
        return `${name} is old enough to drive`;
    } else {
        return `${name} is not old enough to drive`;
    }

}
//console.log(canDrive("jane", 22));
//console.log(canDrive("june", 17));

//challenge 6: Finding the largest number
function findLargest(a: number, b: number, c: number): number {
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
function calculateBMI(weight: number, height: number): string {
    let BMI = weight / (height * height);
    let category = "";
    if (BMI < 18.5) {
        category = "underweight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        category = "Normal weight";
    } else if (BMI >= 25 && BMI < 29.9) {
        category = "overweight"
    } else {
        category = "Obese"
    }
    return category;
}
//console.log(calculateBMI(68, 1.75));
//console.log(calculateBMI(85, 1.8));

//challenge 8: Greeting based on time
function greetUser(name: string, hour: number): string {
    if (hour >= 5 && hour <= 12) {
    return `Good morning, ${name}!`;
    } else if (hour >= 12 && hour <= 17) {
    return `Good afternoon, ${name}!`;
    } else if (hour >= 18 && hour <= 21) {
    return `Good evening, ${name}!`;
    } else {
    return `Good night, ${name}!`;
  }
}
//console.log(greetUser("Regina",9)); 

//challenge 9: Write a function called fizzBuzzCheck
function fizzBuzzCheck(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    }
    return num.toString();
}

console.log(fizzBuzzCheck(15));  
console.log(fizzBuzzCheck(9));   
console.log(fizzBuzzCheck(10));  
console.log(fizzBuzzCheck(7));   
