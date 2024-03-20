//Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "HP",
    model: "Spectre x360 14",
    year: 2024,
    describe: function () {
        console.log("This Laptop is ".concat(this.make, " ").concat(this.model, " released in ").concat(this.year));
    }
};
laptop.describe();
