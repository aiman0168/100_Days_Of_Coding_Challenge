//What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  alert( i-- );
} //Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.


//For every loop iteration, write down which value it outputs and then compare it with the solution.
//Both loops alert the same values, or not?
//The prefix form ++i:
let j = 0;
while (++j < 5) alert( j ); //From 1 to 4
//The postfix form i++
let k = 0;
while (k++ < 5) alert( k ); //From 1 to 5


//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
let a = 0;
while(a < 3){
    alert( `number ${a}!` );
    a++;
};