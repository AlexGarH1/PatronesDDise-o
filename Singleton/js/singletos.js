/*Notas Ejemplos
Se utilza generalmente para un objeto que se necesita una sola instancia en todo el proyecto
es decir qe no va a cambiar, por ejemplo una conexion a una base de datos, un log, calendario, etc.
*/

//--------------------Primer ejemplo de Singleton------------------------------
// class Singleton{

//     static getInstance(){
//         return Singleton.instance;
//     }
    
//     constructor(){

//         this.random = Math.random(); //this le pertenece a la instancia/objeto
       
//         //Si existe una instancia de la clase Singleton, no se crea otra
//         if(Singleton.instance){ //Singleton.instance es una propiedad estatica del objeto
//             console.log("Singleton instance already exists");
//             return Singleton.instance;
//         }

//         console.log("Singleton instance created");
//         Singleton.instance = this;
//     }
// }

// const singleton = new Singleton();
// const singleton2 = new Singleton();
// const singleton3 = Singleton.getInstance();

// console.log(`Random value of singleton: ${singleton.random}`);
// console.log(`Random value of singleton2: ${singleton2.random}`);
// console.log(`Random value of singleton3: ${singleton3.random}`);

// console.log(`Are they the same instance? ${singleton === singleton2}`);


//--------------------Caso practico Week------------------------------
class WeekDays{
    dayEs = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    dayEn = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance){
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }
    
    getDays(){
        return this.lang === "es" 
        ? this.dayEs 
        : this.dayEn;
    }
}

const weekDaysEn = new WeekDays("es");
const weekDays2 = new WeekDays("en");
console.log(weekDaysEn.getDays());
console.log(weekDays2.getDays());