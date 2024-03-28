//Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let blockLet = "This is not accessible outside the block";
    const blockConst = "This is also not accessible outside the block";
    console.log(blockLet);
    console.log(blockConst);
};
//Showing how variables declared inside the block are not accessible outside of it.
try {
    console.log(blockLet); //This will fail
} catch (error){
    console.log("blockLet is not accessible outside the block")
};
try {
    console.log(blockConst);// This will also fail
} catch (error){
    console.log("blockConst is not accessible outside the block")
};