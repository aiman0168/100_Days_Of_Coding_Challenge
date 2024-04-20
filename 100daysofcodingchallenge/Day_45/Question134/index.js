//Take a JSON string and parse it into a JavaScript object.
var jsonString = '{model: "Vivo V30", price: "139,999 pkr", battery: "5000 mAh"}';
var mobile = JSON.parse(jsonString);
console.log(mobile);
