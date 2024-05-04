//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result:
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
//Will the function work differently if else is removed?
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
//Is there any difference in the behavior of these two variants?
//Ans: No Difference, In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.


//Rewrite the function using '?' or '||'
//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result.
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:

// Using a question mark operator ?
function checkAge(age) {
  return (age > 18) ? 'true' : confirm('Did parents allow you?');
 };
 
 // Using OR ||
 function checkAge(age) {
     return (age > 18) || confirm('Did parents allow you?');
 };




//Write a function min(a,b) which returns the least of two numbers a and b.
function min(a,b){
   if(a < b){
    return a;
  } else {
    return b;
  }
};
 



//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function power(x=1, n=1) {
  if (a > 1) {
  return x ** n;
  } else {
  return "invalid input";
  }
  }