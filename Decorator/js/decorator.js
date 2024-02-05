//component
class ProductComponent{
    constructor(name){
        this.name = name;
    }

    getDetail(){
        return ` ProductComponent: ${this.name}`
    }
}

//decorator 1
class ProductDecorator{

    constructor(ProductComponent){
        this.ProductComponent = ProductComponent;
    }

    getDetail(){
        return this.ProductComponent.getDetail();
    }
}

class ComercialInfoProductDecorator extends ProductDecorator{
    constructor(ProductComponent, tradename, brand){
        super(ProductComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail(){
        return `ComercialDecorator: ${this.tradename} ${this.brand}` + super.getDetail();
        
    }
}

//decorator 2
class StoreProductDecorator extends ProductDecorator{
    constructor(ProductComponent, price){
        super(ProductComponent);
        this.price = price;
    }

    getDetail(){
       return super.getDetail() + ` StoreDecorator: $${this.price}`;
        
    }
}

//Decorador 3
class HTMLProductDecorator extends ProductDecorator{
//No creo un constructo ya que unicamente usamos el del componente

    getDetail(){
        return `<h2>Información del producto</h2>
        <p>${super.getDetail()}</p>`
    }
}

//Ejecución
//component
const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

//decorador 1 component
const comercialInfoProductDecorator = 
        new ComercialInfoProductDecorator(productComponent, 'Pilsen', 'Cristal');
console.log(comercialInfoProductDecorator.getDetail());

//decorador 2 component
const storeProduct = 
        new StoreProductDecorator(productComponent, 10);    
console.log(storeProduct.getDetail());

///Decorador 2 con decorador 1
const product = new StoreProductDecorator(comercialInfoProductDecorator, 10);
console.log(product.getDetail());

//Decorador 3 con decorador 2 con decorador 1
const htmlProduct = new HTMLProductDecorator(product);
miDiv.innerHTML = htmlProduct.getDetail();
