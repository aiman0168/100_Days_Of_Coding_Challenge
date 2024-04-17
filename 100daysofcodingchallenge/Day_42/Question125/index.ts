//Modify a method in an object to use the this keyword to access another property in the same object.
const sum = {
    num1: 34,
    num2: 45,
    sumofNumbers: function(){
        return this.num1 + this.num2
    },
};

console.log(sum.sumofNumbers());