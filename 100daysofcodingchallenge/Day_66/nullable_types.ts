let myname: string | null = "Aiman";
let myage: number | null = 45;

//Using literal data types in function parameters 
function greetUser(name: string | null){
    if (name === null){
        console.log("Hello, Guest")
    }else {
        console.log(`Hello ${name}`)
    }
};