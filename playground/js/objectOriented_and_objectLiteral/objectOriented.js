
class Person {
    name;
    birthday;

    constructor(name, birthday ) {
        this.name = name;
        this.birthday = birthday;
    }

    getAge() {
        return this.getCurrentYear() - this.birthday;
    }

    getAgeNextYear() {
        return this.getAge() +1;
    }

    getCurrentYear() {
        return new Date().getFullYear();
    }
}

const person = new Person("Kati", 1989);
const person2 = new Person("Jani", 1989);

console.log(`Hi, I am ${person.name} and my age is ${person.getAge()}. I will be ${person.getAgeNextYear()} years old.`);
console.log(`Hi, I am ${person2.name} and my age is ${person2.getAge()}. I will be ${person2.getAgeNextYear()} years old.`);