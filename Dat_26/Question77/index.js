// Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello ".concat(name, "!"));
}
;
//Function with a name
greetUser("Emma");
//Function without a name
greetUser();
