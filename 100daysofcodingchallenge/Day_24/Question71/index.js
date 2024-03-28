//Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
//USING LET
var username = "Ahad";
username = "Ali";
console.log(username);
//USING CONST
var gender = "Male";
try {
    gender = "Female"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
// This example illustrates that `const` prevents changing the variable once it's set.
