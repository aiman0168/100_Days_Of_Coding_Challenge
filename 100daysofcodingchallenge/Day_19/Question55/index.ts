//Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
//Make a list of numbers
let numbers = [1, 2, 3, 4, 5];
//to make a new list where each number is twice its original value
let doubleNumbers = numbers.map(number => number * 2);
//Print 
console.log(doubleNumbers);