// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
type Shape = {
    kind: "Circle" | "Rectangle"
    radius?: number,
    width?: number,
    height?: number,
};
let Circle: Shape = {
    kind: "Circle",
    radius: 7
};
let Rectangle: Shape = {
    kind: "Rectangle",
    width: 5,
    height: 6
};
console.log(Circle);
console.log(Rectangle);