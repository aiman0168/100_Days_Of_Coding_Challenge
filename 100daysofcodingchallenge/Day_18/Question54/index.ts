//Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function createFlexibleObjectKey(key: string, value: string) {
    let flexibleObject = {};
    flexibleObject[key] = value;
    return flexibleObject;
}

// Using the flexible list setup for a user's preference
let userPreference = createFlexibleObjectKey("theme", "dark");

// Showing the user's choice
console.log(userPreference);
