//Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedArray = [1, "Pistachio", true, 6, "Walnut", 7, "Almond"];

let stringArray = mixedArray.filter(items =>typeof items === "string");
console.log(stringArray);