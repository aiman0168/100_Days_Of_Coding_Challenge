function returnTypeEx<T>(val: T):T{
    return val;
}

console.log(returnTypeEx<number>(100));
console.log(returnTypeEx<string>("Hello World"));

const returnTypeArrowSyntax = <T>(val: T):T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Hello World"));

function testType<T>(val: T): string {
    return `The val is ${val} and type is ${typeof val}`
};

console.log(testType<number>(100));
console.log(testType<string>("Hello"));

function multipleTypes<T, S>(valueOne: T, valueTwo: S):string {
    return `The First value is ${valueOne} and the second value is ${valueTwo}`
};
console.log(multipleTypes<string, number>("Osama", 100));
console.log(multipleTypes<string, boolean>("Elzero", true));