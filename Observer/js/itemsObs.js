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

class ItemSubject extends Subject{
    constructor(){
        super();
        this.items = [];
    }

    addItem(item){
        this.items.push(item);
        this.notify(this.items);
    }

    // removeItem(item){
    //     this.items = this.items.filter(i => i !== item);
    //     this.notify(this.items);
    // }
}

class HtmlElementObserver{
    constructor(element){
        this.element = element;
    }

    refresh(data){
        this.element.innerHTML = data.reduce((ac, e)=>{
            return ac + `<p>
                ${e}
            </p>`
        }, "");
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

const items = new ItemSubject();
const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);

const obs = new Observer((data) => {
    div3.innerHTML = data.length;
});


items.subscribe(div1Observer);
items.subscribe(div2Observer);
items.subscribe(obs);

function addItem(){
   const name = txtName.value;
    items.addItem(name);
}