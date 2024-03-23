//Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
//Make a list of numbers
var numbers = [1, 2, 3, 4, 5];
//to make a new list where each number is twice its original value
var doubleNumbers = numbers.map(function (number) { return number * 2; });
//Print 
console.log(doubleNumbers);
