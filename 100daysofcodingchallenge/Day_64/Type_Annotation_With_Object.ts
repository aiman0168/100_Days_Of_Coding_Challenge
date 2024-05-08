let personInfo : {
    name: string;
    age: number;
    jobTitle: string;
    address: {
        street: string;
        city: string;
    }
};

personInfo = {
    name: "Elsa",
    age: 23,
    jobTitle: "Doctor",
    address: {
        street: "123 Main str",
        city: "XYZ"
    }
};

//Another Method 
let personInfo2 : {
    name: string;
    age: number;
    jobTitle: string;
    address: {
        street: string;
        city: string;
    }
} = {
    name: "Liza",
    age: 23,
    jobTitle: "Doctor",
    address: {
        street: "123 Main str",
        city: "XYZ"
    }
};