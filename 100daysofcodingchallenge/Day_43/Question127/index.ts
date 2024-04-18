//Convert a traditional function expression to an arrow function.
const traditionalFunction = function (a, b){
    return a + b;
};

const arrowFunction = (a, b) =>  a + b;

console.log(traditionalFunction(4, 7));
console.log(arrowFunction(4, 7));