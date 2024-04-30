//Write the code which asks for a login with prompt.
let input = ("Who's there?", "");

if (input === "Admin"){
    let pass = prompt("Enter the password", "");
    if (pass = "TheMaster"){
        alert( 'Welcome!' );
    }
    else if (pass === "" || pass === null){
    prompt("Cancelled");
}else {
    prompt("Wrong password")
}
} else if (input === "" || userName === null){
    alert('Cancelled');
}else {
    alert("I dont know you");
};