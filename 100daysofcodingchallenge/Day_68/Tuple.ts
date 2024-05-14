let studentResult: readonly [string, number, boolean] = ["Ahsan", 2345, true];

studentResult = ["Ali", 3456, false];

//individual Variables
const [studentname, rollnumber, result] = studentResult;
console.log(studentname);
console.log(rollnumber);
console.log(result);