class PersonInfo {
    constructor (firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let p1 = new PersonInfo('Anna', 'Simpson', 22, 'anna@yahoo.com');
let p2 = new PersonInfo('John', 'Smith', 33, 'john@yahoo.com');
console.log(p1.toString());
console.log(p2.toString());