//Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function Arithematic (num1: number, String: string): number {
    return num1 + Number(String);
};

console.log(Arithematic(10,"5"));