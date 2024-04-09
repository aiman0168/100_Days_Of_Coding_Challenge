//Compare two strings to check if they are identical, ignoring case sensitivity
function stringComparison(str1: string, str2: string):boolean {
    return str1.toLowerCase() === str2.toUpperCase();
}

console.log(stringComparison("Hello","hello"));