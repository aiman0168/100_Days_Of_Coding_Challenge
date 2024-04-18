//Convert a traditional function expression to an arrow function.
var traditionalFunction = function (a, b) {
    return a + b;
};
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(4, 7));
console.log(arrowFunction(4, 7));
