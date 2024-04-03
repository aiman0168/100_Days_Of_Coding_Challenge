//Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function isvalueNaN (value: any):boolean {
    return isNaN(value);
}

console.log(isvalueNaN("Hello")); //true
console.log(isvalueNaN(123)); //false