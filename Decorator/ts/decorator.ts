interface Component{
    getDetail(): string;
}

class ProductComponent implements Component{
    protected name: string;

    constructor(name: string){
        this.name = name;
    }
    
    public getDetail(): string{
        return `${this.name}`;
    }
}

abstract class ProductDecorator implements Component{
    protected product: Component;

    constructor(product: Component){
        this.product = product;
    }

    public getDetail(): string{
        return this.product.getDetail();
    }
}

//decorator 1
class ComercialInfoProductDecorator extends ProductDecorator{
    private tradename: string;
    private brand : string;

    constructor (component: Component, tradename: string, brand: string){
        super(component);

        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string{
        return `${this.tradename} - ${this.brand} - ` + this.product.getDetail();
    }
}

//decorator 2
class StoreProductDecorator extends ProductDecorator{
    private price : number;

    constructor (component: Component, price: number){
        super(component);
        this.price = price;
    }
    public getDetail(): string{
        return super.getDetail()+` - $${this.price}`;
    }
}

//decorator 3
class HTMLProductDecorator extends ProductDecorator{
    public getDetail(): string{
        return `<h1>Información del producto</h1>
        <p>${super.getDetail()}</p>
        `;
    }
}

//Ejecución componente
const productComponent = new ProductComponent('Laptop');
console.log(productComponent.getDetail());

//decorator 1 con componente
const comercialInfoProductDecorator= 
    new ComercialInfoProductDecorator(productComponent, 'HP', 'Pavilion');
console.log(comercialInfoProductDecorator.getDetail());

//decorator 2 con componente
const storeProductDecorator=
    new StoreProductDecorator(productComponent, 500);
console.log(storeProductDecorator.getDetail());

//decorator 2 con decorator 1
const storeProduct2 = new StoreProductDecorator(comercialInfoProductDecorator, 500);
console.log(storeProduct2.getDetail());

//decorador 3 que tiene un decorador 2 que tiene un decorador 1
const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());
