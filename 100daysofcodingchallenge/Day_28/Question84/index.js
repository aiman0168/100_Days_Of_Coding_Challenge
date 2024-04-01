//Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function textReplacer(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(textReplacer("I love JavaScript and JavaScript is awesome!"));
