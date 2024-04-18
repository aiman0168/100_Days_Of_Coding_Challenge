//Create an arrow function that takes multiple parameters and returns the product of all parameters.
var arrowFunction = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(arrowFunction(2, 3, 5));
