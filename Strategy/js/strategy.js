/*Notas: Patron de diseñp de comportamiento
Tener comportamientos distintos de un objeto o poder cambiarlos
en tiempo de ejecución.
Ejemplos de uso: Calculadora/calculos de ventas/Bonos, formularios, etc.
*/

class SaleContext{

    constructor(strategy){
        this.strategy = strategy;
    }    
    setStrategy(strategy){
        this.strategy = strategy;
    }
    calculate(amounth){
        return this.strategy.calculate(amounth);
    }
}

//Estraregia de venta regular
class RegularSaleStrategy{

    constructor(tax){
        this.tax = tax;
    }

    calculate(amounth){
        return amounth + (amounth * this.tax);
    }
}

//Estrategia de venta con descuento
class DiscountSaleStrategy{
    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amounth){
        return (amounth + (amounth * this.tax)) - this.discount;
    }    
}

//Estrategia de venta extranjera
class ForeignSaleStrategy{
    calculate(amounth){
        return amounth * this.getDollarPrice();
    }    

    getDollarPrice(){
        return 20;
    }
}

//Estrategia RegularSale
const regularSale = new RegularSaleStrategy(0.16);
const discountSale = new DiscountSaleStrategy(.16, 5);

const sale = new SaleContext(regularSale);

//camio de estrategia de la instancia sale con el setStrategy()
sale.setStrategy(discountSale)
console.log(sale.calculate(10));

sale.setStrategy(regularSale)
console.log(sale.calculate(10));

sale.setStrategy(new ForeignSaleStrategy(10))
console.log(sale.calculate(10));