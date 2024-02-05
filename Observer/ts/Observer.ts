// Purpose: Interface for Observer pattern.
//T is the type of the value that the observer will be observing. 
//generic type T is used to make the observer pattern more flexible and reusable.
interface IObserver<T> {
    refresh(value: T) : void;
}

interface ISubject<T>{

    observers: IObserver<T>[];

    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

/**
 * Clase que representa un sujeto observable.
 * @template T El tipo de valor que se notificará a los observadores.
 */
class Subject<T> implements ISubject<T>{
    observers: IObserver<T>[];

    constructor(){
        this.observers = [];
    }

    /**
     * Suscribe un observador al sujeto.
     * @param observer El observador a suscribir.
     */
    subscribe(observer: IObserver<T>): void{
        this.observers.push(observer);
    }

    /**
     * Desuscribe un observador del sujeto.
     * @param observer El observador a desuscribir.
     */
    unsubscribe(observer: IObserver<T>): void{
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    /**
     * Notifica a todos los observadores con un nuevo valor.
     * @param value El valor a notificar a los observadores.
     */
    notify(value: T): void {
        this.observers.forEach(observer => observer.refresh(value));
    }
}

/**
 * Clase que representa un observador genérico.
 * @template T El tipo de valor que se va a observar.
 */
class Observer<T> implements IObserver<T>{
    private fn : (value: T) => void;

    constructor(fn: (value: T) => void){
        this.fn = fn;
    }

    refresh(value: T): void{
        this.fn(value);
    }
}

//Ejemplo de uso con números
const subjectNumber = new Subject<number>();
const observer1 = new Observer<number>((n)=>{
    console.log(`Observer 1: ${n}`);
});
const observer2 = new Observer<number>((n)=>{
    console.log(`Observer 2: ${n}`);
});
subjectNumber.subscribe(observer1);
subjectNumber.subscribe(observer2);
subjectNumber.notify(10);
subjectNumber.notify(20);


//Ejemplo de uso con strings
const subjectString = new Subject<string>();
const observer3 = new Observer<string>((s)=>{
    console.log(`Observer 3: ${s.toUpperCase()}`);
});
const observer4 = new Observer<string>((s)=>{
    console.log(`Observer 4: ${s.toLowerCase()}`);
});
subjectString.subscribe(observer3);
subjectString.subscribe(observer4);
subjectString.notify("Hello World");
subjectString.notify("Goodbye World");