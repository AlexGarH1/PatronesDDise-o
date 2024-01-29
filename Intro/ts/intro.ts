//Interfaces
interface Product{
    price: number;
    getPrice(): string;
}

//POO TS
class Drinks{
    private name: string;
    constructor(name: string){
        this.name = name;
    }

    info(): string{
        return this.name;
    }
}

const nDrink = new Drinks('Coke');
console.log(nDrink.info());

//Herencia
class Beers extends Drinks implements Product{
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number){
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }
    info(): string{
        return `${super.info()} ${this.alcohol}`;
    }
    getPrice(): string{
        return "El precio es: " + this.price;
    }
}

const nBeer = new Beers('Corona', 4.5, 10);
console.log(nBeer.info());

//implementacion de interfas producto
class Snacks implements Product{
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    getPrice(): string{
        return "El precio es: $" + this.price;
    }
}

const productos: Product[] = [
    new Beers('Corona', 4.5, 10),
    new Snacks('Papas', 15)
];

function getPrice(products: Product[]){
    products.forEach((product) => {
        console.log(product.getPrice());
    });
}

getPrice(productos);