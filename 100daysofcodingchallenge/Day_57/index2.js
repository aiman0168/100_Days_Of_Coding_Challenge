//Using if..else, write the code which gets a number via prompt and then shows in alert:
//1, if the value is greater than zero,
//-1, if less than zero,
//0, if equals zero.

let num = prompt("Enter a number", 0);

if (num > 0){
    alert (1);
}else if (num < 0){
    alert (-1);
}else {
    alert(0);
}

//Rewrite this if using the conditional operator '?':
//let result;
//if (a + b < 4) {
//    result = 'Below';
//  } else {
//    result = 'Over';
//  }

let result = (a + b < 4) ? 'Below' : 'Over';  //This is also called ternary operator



//Rewrite if..else using multiple ternary operators '?'.
//let message;

//if (login == 'Employee') {
//  message = 'Hello';
//} else if (login == 'Director') {
//  message = 'Greetings';
//} else if (login == '') {
//  message = 'No login';
//} else {
//  message = '';
//}

let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings':
(login == '') ? 'No login':
''

alert(message);