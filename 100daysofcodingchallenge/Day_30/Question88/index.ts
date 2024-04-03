//Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function nearestInteger (numb: number):number {
    return Math.round(numb);
}

console.log(nearestInteger(3.6));