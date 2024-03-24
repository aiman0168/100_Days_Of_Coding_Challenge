//Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function customAdder(valueToadd: number): (number) => number {
    return function (number: number): number {
         return number + valueToadd;
    };
};

let addFive = customAdder(5);
console.log(addFive(5));