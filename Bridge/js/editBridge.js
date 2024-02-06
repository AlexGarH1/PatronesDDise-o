class Editor{
    constructor(implementer){
        this.implementer = implementer;
    }

    print(width, height, color){
        this.implementer.setWidth(width);
        this.implementer.setHeight(height);
        this.implementer.setColor(color);
        this.implementer.print();
    }
}

class EditorWithClear extends Editor{
    constructor(implementer){
        super(implementer);
    }

   clear(){        
        this.implementer.setWidth(0);
        this.implementer.setHeight(0);
        this.implementer.setColor("white");
        this.implementer.print();
   }

}


class HTMLPaiter{
    constructor(container){
        this.container = container;
        this.width = "1px";
        this.height = "1px";
        this.color = "black";
    }
    
    setWidth(width){
        this.width = width+"px";
    }

    setHeight(height){
        this.height = height+"px";
    }
    setColor(color){
        this.color = color;
    }

    print(){
        this.container.innerHTML = `<div style="width:${this.width}; height:${this.height}; 
        background-color:${this.color}"></div>`;
    }
}

class CanvasPainter{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.width = 1;
        this.height = 1;
        this.color = "black";
    }

    setWidth(width){
        this.width = width;
    }
    setHeight(height){
        this.height = height;
    }
    setColor(color){
        this.color = color;
    }

    print(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}

//Editor con implementacion HTML
//const editor = new Editor(new HTMLPaiter(content));

//Editor con implementacion Canvas
//const editor = new Editor(new CanvasPainter(canvas));

//Editor con implementacion HTML y metodo clear
const editor = new EditorWithClear(new HTMLPaiter(content));

//Editor con implementacion Canvas y metodo clear
//const editor = new EditorWithClear(new CanvasPainter(canvas));

range.addEventListener("input", (e)=>{
    const width = e.target.value;
    const height = e.target.value;
    const color = editorColor.value
    editor.print(width, height, color);
});

// editorColor.addEventListener("input", (e)=>{
//     const width = range.value;
//     const height = range.value;
//     const color = e.target.value;
//     editor.print(width, height, color);
// });

btn.addEventListener("click", ()=>{
    editor.clear();
});