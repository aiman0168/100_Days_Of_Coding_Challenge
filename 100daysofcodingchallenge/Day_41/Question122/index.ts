//Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let num: number = 10;

while(num > 0){
    if (num === 5){
        break;
    }
    console.log(num);
    num--;
}