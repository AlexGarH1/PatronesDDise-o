interface ListImplementor{
    elements: number[];

    add(number: number): void;
    getElements(): number[];
}

//Abstracción de la interfaz ListImplementor
interface DataAbstratction{
    implementor: ListImplementor;

    add(number: number): void;
    getElements(): number[];
    operation(fn: (n: number) => number): number[];
}

//Abstracción refinada de la interfaz DataAbstratction
class DataRefineAbstratction implements DataAbstratction{
    implementor: ListImplementor;

    constructor(implementor: ListImplementor){
        this.implementor = implementor;
    }
    
    public add(number: number): void{
        this.implementor.add(number);
    }

    public getElements(): number[]{
        return this.implementor.getElements();
    }

    public operation(fn: (n: number) => number): number[]{
        return this.implementor.getElements().map(fn);
    }
}

//Implementador concreto de la interfaz ListImplementor: Lista ordenada
class OrderedList implements ListImplementor{
    elements: number[] = [];

    public add(number: number): void{
        this.elements.push(number);
        this.elements.sort();
    }

    public getElements(): number[]{
        return this.elements;
    }
}

//Implementador concreto de la interfaz ListImplementor: Lista única
class UniqueList implements ListImplementor{
    elements: number[] = [];
    
    public add(number: number): void{
        if(!this.elements.includes(number)){
            this.elements.push(number);
        }
    }

    public getElements(): number[]{
        return this.elements;
    }
}

const uniqueList = new DataRefineAbstratction(new UniqueList());
uniqueList.add(1);
uniqueList.add(2);
uniqueList.add(1);
uniqueList.add(3);
console.log(uniqueList.getElements()); // [1, 2, 3]

const orderedList = new DataRefineAbstratction(new OrderedList());
orderedList.add(1);
orderedList.add(2);
orderedList.add(1);
orderedList.add(3);
console.log(orderedList.getElements()); // [1, 1, 2, 3]

//implementing the operation method
console.log(orderedList.operation((n: number) => n * 2)); // [2, 2, 4, 6]