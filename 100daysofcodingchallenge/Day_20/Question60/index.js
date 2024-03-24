//Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var profile = (function () {
    var name = "Aiman";
    var age = 20;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
profile.displayInfo();
