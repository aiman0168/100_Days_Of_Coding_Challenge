enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday, 
    Friday,
    Saturday,
    Sunday
};

const today: Days = Days.Thursday;
console.log(`Today is ${Days[today]}`)