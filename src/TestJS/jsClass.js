class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getName() {
        return this.firstName + ' ' + this.lastName
    }
}

const tj = new Person('Adetunji', 'Adeniran')

console.log(tj.getName())