// Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser (name: string = "anonymous"){
    console.log(`Hello ${name}!`);
};
//Function with a name
greetUser("Emma");
//Function without a name
greetUser();