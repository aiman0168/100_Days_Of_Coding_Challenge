//Describe how asynchronous callbacks differ from synchronous code execution.
console.log("Before Synchronous operation");

for (let i = 0; i < 1e9; i++){}
console.log("After Synchronous Operation");

console.log("Before Asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed")
}, 1000);
console.log("After Asynchronous operation");