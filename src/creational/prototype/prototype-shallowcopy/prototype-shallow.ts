export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(
        public name: string,
        public age: number,
    ) {}

    clone(): this {
        const newObj = Object.create(this);

        return newObj;
    }

    addAddresses(address: Address) {
        this.addresses.push(address);
    }
}

export class Address {
    constructor(
        public street: string,
        public number: number,
    ) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Luiz', 30);
person1.addAddresses(address1);
const person2 = person1.clone();

console.log(person2); // vai aparecer um {} vazio pq injetamos dados no prototype
person2.name = 'Joana'; // faz sombra (shaddow) no person1
console.log(person2.name); // mesmo sendo prototype ele contém name
