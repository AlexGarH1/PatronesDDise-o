class Person{
    private name: string;
    private lastName: string;
    private age: number;
    private country: string;
    private city: string;
    private hobbies : string[];

    constructor (name: string, lastName: string, age: number, city: string, country: string ,hobbies: string[]){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName(): string{
        return this.name + " " + this.lastName;
    }
}

interface Personbuilder {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    setName(name: string): Personbuilder;
    setLastName(lastName: string): Personbuilder;
    setAge(age: number): Personbuilder;
    setCountry(country: string): Personbuilder;
    setCity(city: string): Personbuilder;
    addHobby(hobby: string): Personbuilder;
    build(): Person;
}

class NormalPersonBuilder implements Personbuilder{
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    constructor(){
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    reset(): void{
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    setName(name: string): Personbuilder{
        this.name = name;
        return this;
    }

    setLastName(lastName: string): Personbuilder{
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): Personbuilder{
        this.age = age;
        return this;
    }

    setCountry(country: string): Personbuilder{
        this.country = country;
        return this;
    }

    setCity(city: string): Personbuilder{
        this.city = city;
        return this;
    }

    addHobby(hobby: string): Personbuilder{
        this.hobbies.push(hobby);
        return this;
    }

    build(): Person{
        const person = new Person(this.name, this.lastName, 
            this.age, this.city, this.country, this.hobbies);
            
        this.reset();
        return person;
    }
}

class PersonDirector{
    private personBuilder: Personbuilder;

    constructor(personBuilder: Personbuilder){
        this.personBuilder = personBuilder;
    }

    setPersonBuilder(personBuilder: Personbuilder){
        this.personBuilder = personBuilder;
    }

    makeYounger(name: string){
        this.personBuilder.setName(name).setAge(20);
    }

    createSimplePerson(name: string, age: number){
        this.personBuilder.setName(name).setAge(age);
    }
}

//creación 1
const personBuilder = new NormalPersonBuilder();
const person = personBuilder.setName("Alex").setAge(25)
                .addHobby("Gaming").addHobby("Reading")
                .addHobby("Coding")
                .build();
console.log(person);

//creación 2
const person2 = personBuilder.setName("John").setAge(30)
                .setCity("New York").setCountry("USA")
                .addHobby("Exercising")
                .build();
console.log(person2);

//creación 3
const director = new PersonDirector(personBuilder);
//director.makeYounger("Alex");
director.createSimplePerson("Jhon", 25);
const jhon = personBuilder.build();
console.log(jhon);

