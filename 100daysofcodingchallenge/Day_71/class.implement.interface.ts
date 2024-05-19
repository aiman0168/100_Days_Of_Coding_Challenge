class ProductImplementInterface {
    private static nextID: number = 1;
    
    constructor(private id: number, private name: string){}

    static generateNextId():number {
        return ProductImplementInterface.nextID++;
    }

    getProductInfo():string{
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

const product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");
const product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");

console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());