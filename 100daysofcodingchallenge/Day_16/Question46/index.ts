//Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "HP",
    model: "Spectre x360 14",
    year: 2024,
    describe: function () {
        console.log(`This Laptop is ${this.make} ${this.model} released in ${this.year}` )
    }
};

laptop.describe();