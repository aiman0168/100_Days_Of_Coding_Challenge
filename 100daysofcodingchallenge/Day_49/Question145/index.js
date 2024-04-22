//Create a function that accepts a callback and invokes it with some arguments.
function executeCallBack(callBack, arg1, arg2) {
    callBack(arg1, arg2);
}
;
var add = function (a, b) {
    console.log(a + b);
};
executeCallBack(add, 6, 9);
