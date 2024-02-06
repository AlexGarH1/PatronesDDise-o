//Design pattern: Observer
class Subject{
    constructor(){
        this.observers = [];
    }

    subscribe(observer){
        this.observers.push(observer);
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(subscriber => subscriber !== observer);        
    }

    notify(data){
        this.observers.forEach(e=>{
            e.refresh(data);
        })
    }
}

class Observer{ 
    constructor(fn){
        this.fn = fn;
    }
    refresh (data){
        this.fn(data);
    }    
}

const s = new Subject();

const o1 = new Observer(data => console.log("Soy el observador 1", data));
const o2 = new Observer(d=>{
    div1.innerHTML = d;
})

const o3 = new Observer(d=>{
    div2.innerHTML = d.split("").reverse().join("");
})

s.subscribe(o1);
s.subscribe(o2);
s.subscribe(o3);
s.unsubscribe(o1);

function change(){
    s.notify(myText.value);
}