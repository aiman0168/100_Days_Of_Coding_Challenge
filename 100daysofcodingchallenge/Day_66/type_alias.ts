type myString = string;

let Myname: myString = "Aiman";

type MyStrOrNum = string | number;

let myVar: MyStrOrNum = 23;



//Type Alias with Objects
type personInfo = {
    name: string,
    age: number,
    email: string
};

const alice: personInfo = {
    name: "Alice",
    age: 32,
    email: "alice39@gmail.com"
};

const bob: personInfo = {
    name: "bob",
    age: 23,
    email: "bob56@gmail.com"
};

console.log(alice);
console.log(bob);

type Employee = {
    name: string,
    age: number,
    email: string
};

const Alice: Employee = {
    name: "Alice",
    age: 32,
    email: "alice39@gmail.com"
};

const Bob: Employee = {
    name: "bob",
    age: 23,
    email: "bob56@gmail.com"
};

console.log(Alice);
console.log(Bob);