let myArray = ['Mana', 'Jani', 'Vica', 'Panna', 'Juca'];

if (myArray[2].length > 5) {
    console.log("This name is longer than 5 characters.");
} else {
    console.log("This element is shorter than 5 character.");
}

myArray.push('Marcsi');
console.log(myArray);

myArray[0] = 'Kata';
console.log(myArray[0]);

if (myArray.length > 4) {
    console.log('This array has more items than four.');
} else {
    console.log('This array has less items than four.');
}
