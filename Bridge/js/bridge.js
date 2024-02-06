//Bridge: Patron de diseño estructural que permite desacoplar la interfaz de un +
//componente de su implementación.
class EncoderTextAbstraction{
    constructor(encoder){
        this.encoder = encoder;
    }

    encode(str){
        return this.encoder.encode(str);
    }

    decode(str){
        return this.encoder.decode(str);
    }
}

class Base64EncodeImplementor{
    encode(str){
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    decode(str){
        return decodeURIComponent(escape(window.atob(str)));
    }
}

class HTMLEnconderImplementor{
    encode(str){
        return str.split(".").reduce((acc, e)=>{
            return acc + `<p>${e}</p>`;
        }, "");
    }

    decode(str){
        return str.split("</p>").reduce((acc, e)=>{
            return e!= "" ? acc + e.replace("<p>", "") + "." : acc + "";
        }, "");
    
    }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncodeImplementor());
console.log(encoder1.encode('Test'));
console.log(encoder1.decode('VGVzdA=='));

const encoder2 = new EncoderTextAbstraction(new HTMLEnconderImplementor());
console.log(encoder2.encode('Esto es un texto. Esto es otro texto. Esto es un texto'));
console.log(encoder2.decode('<p>Esto es un texto</p><p> Esto es otro texto</p><p> Esto es un texto</p>'));