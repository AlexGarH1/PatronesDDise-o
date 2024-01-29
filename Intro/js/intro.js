
//---------------------Funcion de primer orden-----------------
function sum(a, b) {
    return a + b;
}

let res = sum(4, 2);
let func = sum; //funcion de primer orden

console.log(res);
console.log(func(1, 2));

//-----------------Función de orden superior------------------
function sOrden(fn, a, b){
    console.log("Hace una tarea");
    console.log(fn(a, b));
}

sOrden(sum, 2, 2);

//-----------------Arrow Function------------------
let fA = () => console.log("Hola mundo");
fA();

sOrden((a, b) => a * b, 5, 5);

//-----------------Arrays------------------
//foreach: inmutables
const names = ["Juan", "Pedro", "Maria", "Luisa"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toLocaleUpperCase()));

//sort: mutables
names.sort();
console.log(names);

//map: inmutables => crea un nuevo array
const namesUpper = names.map((name) => name.toLocaleUpperCase());
console.log(namesUpper);

//reduce
const numbers = [1, 2, 3, 4, 5];
const sumNumbers = numbers.reduce((acumulado, number) => acumulado + number, 0); //0 es el valor inicial del acumulado
console.log(sumNumbers);

//-----------------POO------------------
//Clases
class Drink{
    constructor(name){
        this.name = name;
    }
    getName(){
        return "El nombre de la bebida es: " + this.name;
    }
}

//Con función 
function Drink2(name){
    this.name = name;
    this.getName = function(){
        return "El nombre de la bebida es: " + this.name;
    }
}

const drink = new Drink("Coca Cola");
console.log(drink.getName());

const drink2 = new Drink2("Pepsi");
console.log(drink2.getName());

//Herencia
class Beer extends Drink{
    constructor(name, vAlcohol){
        super(name);
        this.vAlcohol = vAlcohol;
    }
    info(){
        return super.getName() + " y tiene un volumen de alcohol de: " + this.vAlcohol;
    }
}

const beer = new Beer("Victoria", 4.5);
console.log(beer.info());