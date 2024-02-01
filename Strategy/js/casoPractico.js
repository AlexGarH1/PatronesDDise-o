
const data = [
    {
    name: "Erdinger Pikantus",
    conutry: "Alemania",
    info : "Cerveza de trigo de color marrón oscuro, con un sabor fuerte y afrutado.",
    img : 'https://www.cervezasyria.com/imagenes/erdinger-pikantus.jpg'
    },
    {
        name : "Corona",
        conutry: "México",
        info : "Cerveza mexicana, de tipo lager, elaborada por el grupo Modelo.",
        img : 'https://www.cervezasyria.com/imagenes/corona.jpg'
    },
    {
        name : "Guinness",
        conutry: "Irlanda",
        info : "Cerveza negra, de tipo stout, elaborada por la cervecera Guinness.",
        img : 'https://www.cervezasyria.com/imagenes/guinness.jpg'
    }
]

class InfoContext{

    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }
    
    setStrategy(strategy){
        this.strategy = strategy;
    }

    show(){
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy{

    show(data, element){
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac + `<div>
            <h2>${beer.name}</h2>
            <p>${beer.conutry}</p>
            </div>
            <hr>`
        }, "");
    }
}

class ListStrategy{

    show(data, element){
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac + `<div>
            <h2>${beer.name}</h2>
            <p>${beer.conutry}</p>
            </div>
            <hr>`
        }, "");
    }
}

const info = new InfoContext(new ListStrategy(), data, content);
info.show();