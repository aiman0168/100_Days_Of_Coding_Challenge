//Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
//Function Declaration
function declaration(num) {
    return num * num;
}
;
//Function Expression
var expression = function (num) {
    return num * num;
};
//logging both the functions
console.log(declaration(2));
console.log(expression(2));
