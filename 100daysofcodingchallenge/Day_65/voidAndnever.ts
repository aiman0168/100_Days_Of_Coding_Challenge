function greet (name: string):void {
    console.log(`Hello ${name}`)
};

function noReturnvalue():void {

};

function throwError(message: string):never {
    throw new Error(message)
};

function infiniteLoop():never {
    while (true){
        
    }
}