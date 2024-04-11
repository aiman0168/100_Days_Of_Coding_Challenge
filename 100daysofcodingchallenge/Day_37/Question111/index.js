//Use an if-else-if chain to categorize a person's age group (child, teenager, adult)
function personAge(age) {
    if (age < 13) {
        return 'The person is a child';
    }
    else if (age <= 19) {
        return 'This person is a teenager';
    }
    else {
        return 'This person is a adult';
    }
}
console.log(personAge(12)); // child
console.log(personAge(17)); //teenager
console.log(personAge(28)); //adult
