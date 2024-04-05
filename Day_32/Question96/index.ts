//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sum (num: number[]):number {
    return num.reduce((accumulator, current) => accumulator + current, 0);
}

const numbers: number[] = [23, 45, 67, 56, 7];
console.log(sum(numbers));