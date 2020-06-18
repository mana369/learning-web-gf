
function createPerson(name, birthday) { 
    return {
        name: name,
        birthday: birthday,

        getAge: function () {
            return this.getCurrentYear() - this.birthday;
        },
        getAgeNextYear: function () {
            return this.getAge() +1;
        },
        getCurrentYear: function () {
            return new Date().getFullYear();
        }
    };
}

const person = createPerson("Kati", 1990);
const person2 = createPerson("Jani", 1989);

console.log(`Hi, I am ${person.name} and my age is ${person.getAge()}. I will be ${person.getAgeNextYear()} years old.`);
console.log(`Hi, I am ${person2.name} and my age is ${person2.getAge()}. I will be ${person2.getAgeNextYear()} years old.`);
