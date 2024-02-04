interface Strategy{
    login(user: string, password: string): boolean;
}

class loginContext{
    private strategy : Strategy;

    constructor(strategy: Strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }
    login(user: string, password: string): boolean{
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy{
    login(user: string, password: string) {
        console.log("Valida user en la base de datos");
        if(user === "admin" && password === "admin"){
            return true;
        }
        return false;
    }
}

class LoginServicetrategy implements Strategy{
    login(user: string, password: string) {
        console.log("Valida el usuario con el servicio de autenticación");
        if(user === "admin" && password === "admin"){
            return true;
        }
        return false;
    }
}

class LoginGoogletrategy implements Strategy{
    login(user: string, password: string) {
        console.log("Valida el usuario con google");
        if(user === "admin" && password === "admin"){
            return true;
        }
        return false;
    }
}
const auth = new loginContext(new LoginDBStrategy());
const res =  auth.login("admin", "admin");
console.log(res);

auth.setStrategy(new LoginServicetrategy());
const res2 =  auth.login("admin", "root");
console.log(res2);

auth.setStrategy(new LoginGoogletrategy());
const res3 =  auth.login("admin", "admin");
console.log(res3);
