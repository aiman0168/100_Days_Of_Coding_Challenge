// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let priceSet1 = [1500, 1200, 1300];
let priceSet2 = [2200, 3400, 1400];
let pricesCombined = [...priceSet1,...priceSet2].sort((a,b) => a-b);
console.log(pricesCombined);
