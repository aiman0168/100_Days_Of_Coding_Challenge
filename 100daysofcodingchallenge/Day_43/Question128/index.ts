//Create an arrow function that takes multiple parameters and returns the product of all parameters.
const arrowFunction = (...numbers: number[]) => 
    numbers.reduce((total, number) => total * number, 1);

console.log(arrowFunction(2, 3, 5));