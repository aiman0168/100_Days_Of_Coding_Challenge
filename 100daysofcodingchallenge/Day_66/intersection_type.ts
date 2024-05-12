type firstType = {
    name: string,
    age: number
};

type secondType = {
    address: string,
    email: string
};

type CombinedType = firstType & secondType;

const personInfo: CombinedType = {
    name: "Alice",
    age: 45,
    address: "XYZ city",
    email: "alicexyz@gmail.com"
};