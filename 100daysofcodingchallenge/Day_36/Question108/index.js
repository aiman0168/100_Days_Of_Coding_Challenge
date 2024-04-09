//Compare two strings to check if they are identical, ignoring case sensitivity
function stringComparison(str1, str2) {
    return str1.toLowerCase() === str2.toUpperCase();
}
console.log(stringComparison("Hello", "hello"));
