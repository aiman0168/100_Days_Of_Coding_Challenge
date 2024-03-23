//Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedArray = [1, "Pistachio", true, 6, "Walnut", 7, "Almond"];
var stringArray = mixedArray.filter(function (items) { return typeof items === "boolean"; });
console.log(stringArray);
