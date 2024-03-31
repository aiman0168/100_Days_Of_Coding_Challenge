//Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function objectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
objectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
