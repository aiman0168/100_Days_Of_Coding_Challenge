//Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
var countries = new Map();
countries.set("South Korea", "Seoul");
countries.set("Thailand", "Bangkok");
countries.set("SaudSaudi Arabia", "Riyadh");
console.log(countries);
function capitalofCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log('Canada is not in the map');
    }
}
capitalofCanada(countries);
