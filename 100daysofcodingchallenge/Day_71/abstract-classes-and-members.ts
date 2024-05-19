abstract class AbstractItem {
    private static nextID: number = 1;

    constructor(public id: number, protected name: string){}

    static generateNextId(): number {
        return AbstractItem.nextID++;
    }

    abstract getItemInfo(): string;
}

class Item extends AbstractItem {
    constructor(id: number, name: string){
        super(id, name)
    }

    getItemInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");

console.log(item1.getItemInfo()); 
console.log(item2.getItemInfo());