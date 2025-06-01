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
console.log(isNegative(-23));
console.log(isNegative(55));
