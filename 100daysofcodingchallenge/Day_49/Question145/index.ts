//Create a function that accepts a callback and invokes it with some arguments.
function executeCallBack (
    callBack: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
): void {
    callBack(arg1, arg2)
};

const add = (a: number, b: number) => {
    console.log(a + b);
};

executeCallBack(add, 6, 9);