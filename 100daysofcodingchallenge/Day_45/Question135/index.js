//Explain how you can format a JSON string with proper indentation for readability.
var mobile = {
    model: "Vivo V30",
    price: "139,999 pkr",
    battery: "5000 mAh"
};
var jsonstring = JSON.stringify(mobile, null, 2);
console.log(jsonstring);
