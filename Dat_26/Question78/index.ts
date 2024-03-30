//Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
//Function Declaration
function declaration (num: number):number {
    return num * num
};
//Function Expression
const expression = function(num: number):number {
    return num * num
};
//logging both the functions
console.log(declaration(2));
console.log(expression(2));
