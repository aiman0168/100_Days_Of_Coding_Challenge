//Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let profile = (function() {
    let name = "Aiman";
    let age = 20;

    return { 
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();     

profile.displayInfo();