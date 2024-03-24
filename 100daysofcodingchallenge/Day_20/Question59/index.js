//Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function customAdder(valueToadd) {
    return function (number) {
        return number + valueToadd;
    };
}
;
var addFive = customAdder(5);
console.log(addFive(5));
