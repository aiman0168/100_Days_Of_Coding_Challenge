function areaofRectangle(recLength: number, recWidth: number):number {
    return recLength * recWidth;
}

//Calling the function with valid argument
const recLength = 5;
const recWidth = 8;
const area = areaofRectangle(recLength, recWidth);
console.log(`The area of rectangle is ${area}`);