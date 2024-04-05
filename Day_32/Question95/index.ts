//Write a function that uses the .filter() method to return an array of numbers greater than 10.
function greaterThenTen (numb: number[]):number[] {
    return numb.filter(numb => numb > 10);
};

const numbers:number[] = [12, 23, 24, 25, 38];
console.log(greaterThenTen(numbers));