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
console.log(isNegative(-23));
console.log(isNegative(55));