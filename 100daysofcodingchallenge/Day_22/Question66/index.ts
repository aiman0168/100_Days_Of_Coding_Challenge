//Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function Verification (boolean1: boolean, boolean2: boolean):boolean {
    return boolean1 && boolean2;
};

console.log(Verification(true, false));