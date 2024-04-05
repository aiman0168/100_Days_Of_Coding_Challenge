//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sum(num) {
    return num.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [23, 45, 67, 56, 7];
console.log(sum(numbers));
