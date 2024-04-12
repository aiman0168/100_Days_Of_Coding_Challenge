// Iterate over a Map of student IDs and names, and log each pair to the console.
var studentID = new Map();
studentID.set(1, "Ali");
studentID.set(2, "Amna");
studentID.set(3, "Hamza");
studentID.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
