//Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function textPresence(str) {
    return str.includes("Javascript");
}
// This will return the value as true
console.log(textPresence("This code will be compiled to Javascript"));
//This will return the value as false
console.log(textPresence("This code is written in Typescript"));
