
class Person {
    constructor(name, age,place) {
        this.name = name;
        this.age = age;
        this.place=place;
    }

    welcome() {
        console.log(`I am ${this.name} and age is ${this.age}.Iam from ${this.place}`);
    }
}

module.exports = Person;