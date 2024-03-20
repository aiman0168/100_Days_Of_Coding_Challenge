//Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var Laptops = [
    { make: "HP", model: "Spectre x360 14", year: 2024 },
    { make: "Dell", model: "XPS", year: 2007 },
    { make: "Lenovo", model: "Yoga 7i 14 Gen7", year: 2022 }
];
var Laptop1 = Laptops[0], Laptop2 = Laptops[1], Laptop3 = Laptops[2];
console.log(Laptop1);
console.log(Laptop2);
console.log(Laptop3);
