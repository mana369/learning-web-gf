
const {sum, multiplicatedResult, avarageResult, rand,
  display, contains, minValue, maxValue, bubbleSort} =
  require('./function2');

const array = [];
const arrayLength = rand() % 5 + 5;

for (let i = 0; i < arrayLength; i++) {
  array.push(rand());
}

display(array);
console.log('The sum of the array numbers: ' + sum(array));
console.log('The multiplicated result of the array is: ' +
  multiplicatedResult(array));
console.log('The avarage of the sumResult is: ' + avarageResult(array));
console.log('The minimum value of this array is: ' + minValue(array));
console.log('The maximum value of this array is:' + maxValue(array));
console.log(contains(array, 2));
console.log('The array elements in sorted list: ' + bubbleSort(array));
