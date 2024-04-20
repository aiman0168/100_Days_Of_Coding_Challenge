//Write a JavaScript object and convert it into a JSON string.
var mobile = {
    model: "Vivo V30",
    price: "139,999 pkr",
    battery: "5000 mAh"
};
var jsonString = JSON.stringify(mobile);
console.log(jsonString);
