//Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideRemainder (num1: number, num2: number):{quotient: number, remainder: number}{
    let quotient = Math.floor(num1 / num2);
    let remainder = num1 % num2;
    return {quotient, remainder}
};

console.log(divideRemainder(5,3));