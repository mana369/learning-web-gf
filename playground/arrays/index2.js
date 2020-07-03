
const rand = () => {
    return Math.trunc(Math.random()*10)+1;
};

const array = [];
let arrayLength = rand() % 5 + 5;

/**
 * 
 * @param {number[]} array
 */
const display = (array) => {
   console.log("The array length is: " + array.length + 
   ". The array numbers are: " + array);
};

for (let i = 0; i < arrayLength; i++) {
    array.push(rand());
}


let sum = function(array) {
    let sumResult = 0;
    array.forEach((numberItem) => sumResult = sumResult + numberItem);
    return sumResult;
}

let multiplicatedResult = function(array) {
    let result = 1;
    for (let i=0; i<arrayLength; i++) {
        result = result * array[i];
    }
    return result;
}


display(array);
console.log("The sum of the array' numbers:" + sum(array));
console.log("The multiplicated result of the array is: " + multiplicatedResult(array));
