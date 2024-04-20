//Write a JavaScript object and convert it into a JSON string.
const mobile = {
    model: "Vivo V30",
    price: "139,999 pkr",
    battery: "5000 mAh"
};

const jsonString = JSON.stringify(mobile);

console.log(jsonString);