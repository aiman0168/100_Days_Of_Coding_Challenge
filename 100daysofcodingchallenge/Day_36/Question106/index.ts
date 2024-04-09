// Determine if a given year is a leap year using comparison operators.
function leapYear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear(1900));