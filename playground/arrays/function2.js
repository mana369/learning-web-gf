
const rand = () => {
  return Math.trunc(Math.random() * 10) + 1;
};

/**
 *
 * @param {number[]} array
 */
const display = (array) => {
  console.log('The array length is: ' + array.length +
    '. The array numbers are: ' + array);
};
// 1.feladat
/**
 * @param {number[]} array
 * @return {number}
 */
const sum = function(array) {
  let sumResult = 0;
  array.forEach((numberItem) => sumResult = sumResult + numberItem);
  return sumResult;
};

// 2.feladat
/**
 * @param {number[]} array
 * @return {number}
 */
const multiplicatedResult = function(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result = result * array[i];
  }
  return result;
};

// 3.feladat:
/**
 * @param {number[]} array
 * @return {number}
 */
const avarageResult = function(array) {
  return Number((sum(array) / array.length).toFixed(2));
};

// 4.feladat:
/**
 * @param {number[]} array
 * @param {number} value
 * @return {number}
 */
const minValue = function(array) {
  let minValue = array[0];
  for (const value of array) {
    if (value < minValue) {
      minValue = value;
    }
  }
  return minValue;
};

// 5. feladat:
/**
 * @param {number[]} array
 * @param {number} value
 * @return {number}
 */
const maxValue = function(array) {
  let maxValue = array[0];
  for (const value of array) {
    if (value > maxValue) {
      maxValue = value;
    }
  }
  return maxValue;
};

// Looking for 1 item that cointains the array, or not.
/**
 * @param {number[]} array
 * @param {number} searchedValue
 * @param {number} value
 *
 */

const contains = function(array, searchedValue) {
  for (const value of array) {
    if (value == searchedValue) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} array
 * @param {number} tmp
 * @return {number}
 *
 */

const bubbleSort = (array) => {
  const length = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (array[i] > array[i + 1]) {
        const tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};


module.exports = {
  sum, multiplicatedResult, avarageResult, rand,
  display, contains, minValue, maxValue, bubbleSort};
