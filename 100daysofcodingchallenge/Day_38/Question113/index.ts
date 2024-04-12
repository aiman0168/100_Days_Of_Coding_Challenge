//Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
const countries = new Map<string, string>()
countries.set("South Korea", "Seoul");
countries.set("Thailand", "Bangkok");
countries.set("SaudSaudi Arabia", "Riyadh");

console.log(countries)

function capitalofCanada (countries: Map<string, string>):void {
    if (countries.has("Canada")){
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }else {
        console.log('Canada is not in the map')
    }
}

capitalofCanada(countries);