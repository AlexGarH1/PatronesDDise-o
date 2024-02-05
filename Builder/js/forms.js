class Form{
    constructor(controls, action){
        this.controls = controls;
        this.action = action;
    }

    getContent(){
        return `<form action="${this.action}" method="post">
            ${this.controls.reduce((ac, control)=>{
                return ac + `<div>
                    ${this.getLabel(control)}
                    ${this.getInput(control)}
                    </div>`
            }, "")}
            <button type="submit">Enviar</button>
        </form>`
    }

    getLabel(control){
        return `<label for="${control.name}">${control.text}</label>`
    }

    getInput(control){
        return `<input type="${control.type}" name="${control.name}" id="${control.name}" />`
    
    }
}

class FormBuilder{
    constructor(){
        this.reset();
    }

    reset(){
        this.action = '';
        this.controls = [];
    }

    setAction(action){
        this.action = action;
        return this;
    }

    setText(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: 'text'
        });
        return this;
    }

    setEmail(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: 'email'
        });
        return this;
    }

    setCheckbox(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: 'checkbox'
        });
        return this;
    }
    
    setColor(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: 'color'
        });
        return this;
    }

    build(){
        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;
    }
}

class FormDirector{

    constructor(formBuilder){
        this.setBuilder(formBuilder);
    }

    setBuilder(formBuilder){
        this.formBuilder = formBuilder;
    }

    createPeopleForm(){
        this.formBuilder.reset();
        this.formBuilder.setText("firstName","Nombre")
                        .setCheckbox("isStudent","Estudiante")
                        .setColor("color","Color favorito");
    }
    
    createContactForm(){
        this.formBuilder.reset();
        this.formBuilder.setText("name","Nombre")
                        .setEmail("email","Correo electronico")
                        .setText("number","Telefono");
    
    }
}

const formBuilder = new FormBuilder();

const formPeople = formBuilder.setAction("add.php")
                            .setText("firstName","Nombre")
                            .setText("lastName","Apellido")
                            .setCheckbox("isStudent","Estudiante")
                            .setColor("color","Color favorito")
                            .build();
form1.innerHTML = formPeople.getContent();


const formMail = formBuilder.setAction("send.php")
                            .setText("name","Nombre")
                            .setEmail("email","Corrreo electronico")
                            .build();
form2.innerHTML = formMail.getContent();

const director = new FormDirector(formBuilder);

director.createPeopleForm();
form3.innerHTML = formBuilder.build().getContent();

director.createPeopleForm();
form4.innerHTML = formBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = formBuilder.build().getContent();