//Write a function to remove the last element from an array and return the removed element.
function removelastElement<T>(arr: T[]): T | undefined {
    return arr.pop();
}

const fruits: string[] = ["Mango", "Orange", "Pomegranate"];
console.log(removelastElement(fruits));
console.log(fruits)