class ProductStaticMember {
    private static nextId: number = 1;

    constructor(private id: number, private name: string){}

    static generateNextId(): number {
        return ProductStaticMember.nextId++;
    }

    getProductInfo(): string{
        return `ID: ${this.id}, Name: ${this.name}`
    }
}


const product1static = new ProductStaticMember(ProductStaticMember.generateNextId(), "Widget");
const product2static = new ProductStaticMember(ProductStaticMember.generateNextId(), "Gadget");


console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());