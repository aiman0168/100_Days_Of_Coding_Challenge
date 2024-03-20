//Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let Laptops = [
    {make: "HP", model: "Spectre x360 14", year: 2024},
    {make: "Dell", model: "XPS", year: 2007},
    {make: "Lenovo", model: "Yoga 7i 14 Gen7", year: 2022}
]

let [Laptop1, Laptop2] = Laptops;
console.log(Laptop1);
console.log(Laptop2);