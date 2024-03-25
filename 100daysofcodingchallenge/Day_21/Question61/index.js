//Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var typeofVehicle;
(function (typeofVehicle) {
    typeofVehicle[typeofVehicle["Car"] = 0] = "Car";
    typeofVehicle[typeofVehicle["Truck"] = 1] = "Truck";
    typeofVehicle[typeofVehicle["motorcycle"] = 2] = "motorcycle";
})(typeofVehicle || (typeofVehicle = {}));
;
console.log(typeofVehicle.Car);
