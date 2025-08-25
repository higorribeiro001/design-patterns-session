const personPrototype = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    age: 30,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

const anotherPerson = Object.create(personPrototype); // é simila a herança
anotherPerson.firstName = 'Joana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
