//What is the code below going to output?
alert( null || 2 || undefined ); //The answer is 2, that’s the first truthy value.


//What will the code below output?
alert( alert(1) || 2 || alert(3) ); //first 1, then 2.


//What is this code going to show?
alert( 1 && null && 2 ); //null, because it’s the first falsy value from the list.


//What will this code show?
alert( alert(1) && alert(2) ); //1, and then undefined.


//What will the result be?
alert( null || 2 && 3 || 4 ); //3.


//Write an if condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.
if (age >= 14 && age <= 90);



//Write an if condition to check that age is NOT between 14 and 90 inclusively.
//Create two variants: the first one using NOT !, the second one – without it.
if (!(age >= 14 && age <= 90));


//Which of these alerts are going to execute?
//What will the results of the expressions be inside if(...)?
if (-1 || 0) alert( 'first' ); //Exectes, true
if (-1 && 0) alert( 'second' );  //will not execute, false
if (null || -1 && 1) alert( 'third' );   //Executes, 1