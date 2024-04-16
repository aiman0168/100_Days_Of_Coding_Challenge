//Create a loop that iterates through a string and stops when it finds the first vowel.
function vowel (str: string):void {
    const vowels = "aeiouAEIOU";
    for (const char of str){
        if (vowels.includes(char)){
            console.log(`First vowel found ${char}`);
            break;
        }
        console.log(char);
    }
}

vowel("hdhundg");