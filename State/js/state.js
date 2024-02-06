class DocumentContext{
    
    constructor(){
        this.content = "";
        this.state = new BlankState();
    }

    setState(state){
        this.state = state;
    }

    write(text){
        this.state.write(this, text);
    }
}

class BlankState{
    write(documentContext, text){
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
}

class WithContentState{
    write(documentContext, text){
        documentContext.content += " " + text;
    }
}

class ApprovedeState{
    write(){
        console.error("Documento aprobado, no se puede editar");
    }
}

// Ejemplo de uso
const doc = new DocumentContext();
console.log(doc.state);

doc.write("Hola");
console.log(doc.content);
console.log(doc.state);

doc.write("Pato");
doc.write("algo mas");
console.log(doc.content);

// Cambiar el estado a aprobado
doc.setState(new ApprovedeState());
console.log(doc.state);
doc.write("algo mas");

//cambiar estado a desaprobado > WithContentState
doc.setState(new WithContentState());
console.log(doc.state);
doc.write("Se edita de new");
console.log(doc.content);