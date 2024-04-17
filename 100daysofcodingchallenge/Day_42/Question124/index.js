//Create a function inside an object that returns the object's own name property using the this keyword.
var user = {
    name: "Abraham",
    getName: function () {
        return this.name;
    },
};
console.log(user.getName());
