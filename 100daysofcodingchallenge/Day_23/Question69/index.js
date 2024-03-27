//Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideRemainder(num1, num2) {
    var quotient = Math.floor(num1 / num2);
    var remainder = num1 % num2;
    return { quotient: quotient, remainder: remainder };
}
;
console.log(divideRemainder(5, 3));
