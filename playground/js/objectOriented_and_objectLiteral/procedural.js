
const person = {
    name: "Kati",
    birthday: 1990,
};

/**
 * Kiszamolja valaki korat
 * @param {number} birthday 
 * @param {number} currentYear 
 */
function calcAge(birthday, currentYear) {
    return currentYear - birthday;
}
function getCurrentYear() {
    return new Date().getFullYear();
}
function calcNextAge(currentAge) {
    return currentAge +1;
}

const currentYear = getCurrentYear();
const currentAge = calcAge(person.birthday, currentYear);
const nextAge = calcNextAge(currentAge);

console.log(`Hi, I am ${person.name} and my age is ${currentAge}. I will be ${nextAge} years old.`);
