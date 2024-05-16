//Interface: Declared using the interface keyword.
interface PersonEx {
    name: string,
    age: number,
};

//Type Alias: Declared using the type keyword
type PersonExType = {
    name: string,
    age: number,
};

//Interface: Can be extended by other interfaces using the extends keyword and implemented by classes using the implements keyword.
interface Animal {
    type: string,
}

interface Dog extends Animal {
    bark(): void;
}

class Labrador implements Dog {
    type: "dog";
    bark(){
        console.log("Woof!")
    }
}
//Type Alias: Cannot be extended or implemented directly. However, you can achieve similar results using intersection types.
type AnimalExtype = {
    type: string,
}

type Monkey = AnimalExtype & {
    bark(): void ;
}

const labrador: Monkey = {
    type: "Monkey",
    bark() {
        console.log("Woof!")
    }
};

//Interface: Supports declaration merging. When you declare multiple interfaces with the same name, TypeScript will merge them into a single interface.
interface Book {
    name: string,
};

interface Anthor {
    author: string;
}

interface strBook {
    name: "Namal",
    author: "Nimra Ahmed",
};