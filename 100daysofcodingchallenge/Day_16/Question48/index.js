var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var priceSet1 = [1500, 1200, 1300];
var priceSet2 = [2200, 3400, 1400];
var pricesCombined = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a + b; });
console.log(pricesCombined);
