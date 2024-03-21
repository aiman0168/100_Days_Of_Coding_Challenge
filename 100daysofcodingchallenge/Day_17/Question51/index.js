//Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//a simple function that calculates the area of a rectangle
function calArea(width, height) {
    return width * height;
}
;
//refactor it into an arrow function.
var arrowcalArea = function (width, height) { return width * height; };
console.log(arrowcalArea(6, 7));
