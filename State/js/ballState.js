/**
 * Clase que representa una pelota.
 * @class
 */
class Ball{
    /**
     * Crea una instancia de Ball.
     * @constructor
     * @param {CanvasRenderingContext2D} ctx - El contexto del lienzo en el que se dibujará la pelota.
     * @param {HTMLCanvasElement} canvas - El elemento de lienzo en el que se dibujará la pelota.
     * @param {number} ballSize - El tamaño de la pelota.
     */
    constructor(ctx, canvas, ballSize){
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ballSize = ballSize;
        this.x = 0;
        this.y = 0;

        this.setState(new State1());//Aqui se inicializa el estado
    }

    /**
     * Establece el estado actual de la pelota.
     * @param {State} state - El estado de la pelota.
     */
    setState(state){
        this.state = state;
    }

    /**
     * Imprime la pelota en el lienzo.
     */
    print(){
        this.state.print(this);
    }
}

class State1{
    print(ball){
        ball.ctx.clearRect(0, 0, ball.width, ball.height);
        ball.ctx.fillRect(ball.x, ball.y, ball.ballSize, ball.ballSize);
        
        if(ball.x < (ball.width)-ball.ballSize){
            ball.x++;
        }
        else{
            ball.setState(new State2());
        }
    }
}

class State2{
    print(ball){
        ball.ctx.clearRect(0, 0, ball.width, ball.height);
        ball.ctx.fillRect(ball.x, ball.y, ball.ballSize, ball.ballSize);        
        if(ball.y < (ball.height)-ball.ballSize){
            ball.y++;
        }
        else{
            ball.setState(new State3());
        
        }
    }
}
class State3{
    print(ball){
        ball.ctx.clearRect(0, 0, ball.width, ball.height);
        ball.ctx.fillRect(ball.x, ball.y, ball.ballSize, ball.ballSize);        
        if(ball.x > 0){
            ball.x--;
        }
        else{
            ball.setState(new State4());
        }
    }
}
class State4{
    print(ball){
        ball.ctx.clearRect(0, 0, ball.width, ball.height);
        ball.ctx.fillRect(ball.x, ball.y, ball.ballSize, ball.ballSize);        
        if(ball.y > 0){
            ball.y--;
        }
        else{
            ball.setState(new State1());
        }
    }
}

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';

const ball = new Ball(ctx, canvas, 50);
setInterval(()=>{ball.print(), 100})