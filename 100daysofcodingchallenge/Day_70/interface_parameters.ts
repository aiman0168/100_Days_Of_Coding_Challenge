interface PersonEx2 {
    name: string,
    age: number,
    greet(message:string):void;
}

const Sarah: PersonEx2 = {
    name: "Sarah",
    age: 23,
    greet(message: string){
        console.log(`${this.name} says: ${message}`)
    }
};

Sarah.greet("Hello, Typescript!");