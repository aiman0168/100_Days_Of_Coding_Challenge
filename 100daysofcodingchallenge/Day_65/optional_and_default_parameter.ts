//Optional Parameter:
function greets(name: string, age?: number) {
    if (age !== undefined){
        console.log(`Hello ${name}, You are ${age} years old`)
    }else {
        console.log(`Hello ${name}`)
    }
};

greets("Alice");
greets("Alice", 56);

//Default Parameter:
function defaultParameter(name: string, age: number = 56){
    console.log(`Hello ${name} your age is ${age}`)
}

greets("Alice");
greets("Alice", 56);