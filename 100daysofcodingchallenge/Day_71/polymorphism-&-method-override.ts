abstract class abstractEntity {
    private static nextID: number = 1;
    protected constructor(public id: number, protected name: string){}
    static generateNextID(): number {
        return abstractEntity.nextID++;
    }
    abstract getEntityInfo(): string;
}

class Entity extends abstractEntity {
    constructor(id: number, name: string){
        super(id, name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

class AnotherEntity extends abstractEntity {
    constructor(id: number, name:string){
        super(id, name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}

const entity1: abstractEntity = new Entity(abstractEntity.generateNextID(), "Widget");
const entity2: abstractEntity = new AnotherEntity(abstractEntity.generateNextID(), "Gadget");


console.log(entity1.getEntityInfo()); 
console.log(entity2.getEntityInfo()); 