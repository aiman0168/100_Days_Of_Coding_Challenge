//Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//a simple function that calculates the area of a rectangle
function calArea (width: number, height: number): number {
    return width * height
};
//refactor it into an arrow function.
let arrowcalArea = (width: number, height: number): 
number =>  width * height;

console.log(arrowcalArea(6,7));