//Write a function that uses the .filter() method to return an array of numbers greater than 10.
function greaterThenTen(numb) {
    return numb.filter(function (numb) { return numb > 10; });
}
;
var numbers = [12, 23, 24, 25, 38];
console.log(greaterThenTen(numbers));
