//Take a JSON string and parse it into a JavaScript object.
const jsonString = '{model: "Vivo V30", price: "139,999 pkr", battery: "5000 mAh"}';

const mobile = JSON.parse(jsonString);

console.log(mobile);