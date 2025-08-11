

export class Person {
    // public name: string;
    // private address: string;
    // Constructor tradicional, el cual necesita declarar las propiedades anteriormente.
    // constructor(name: string, addres: string) {
    //     this.name = name;
    //     this.address = addres
    // }

    // Constructor de manera corta que permite declarar las propiedades directamente en él
    // el cual nos asigna los this.name this.address de manera automática
    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = 'Sin dirección'
    ){}
}

// export class Gangster extends Person {
//     constructor(
//         public range: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'Birminghan');
//     }
// }

// Uso de composición
export class Gangster {

    // public person: Person;

    // Constructor con composición
    constructor(
        public range: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName, 'Birmingham');
    }
}

const person = new Person('Thomas', 'Shelby', 'Birmingham');
const shelby = new Gangster("Jefe", 45, "Thomas Shelby", person);

console.log(shelby);