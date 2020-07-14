
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
  return array.reduce((acc, value) => acc + value, 0);
};

// 2.feladat
/**
 * @param {number[]} array
 * @return {number}
 */
const multiplicatedResult = function(array) {
  return array.reduce((acc, value) => acc * value, 1);
};

// 3.feladat:
/**
 * @param {number[]} array
 * @return {number}
 */
const avarageResult = function(array) {
  return sum(array) / array.length;
};

// 4.feladat:
/**
 * @param {number[]} array
 * @return {number|undefined}
 */
const minValue = function(array) {
  return array.sort((b, a) => +(a < b) || +(b === a) -1)[0];
};

// 5. feladat:
/**
 * @param {number[]} array
 * @param {number} value
 * @return {number|null}
 */
const maxValue = function(array) {
  return array.reduce((acc, value) => {
    if (array.length === 0) {
      return null;
    } if (acc > value) {
      return acc;
    } else {
      return value;
    }
  });
};

// Looking for 1 item that cointains the array, or not.
/**
 * @param {number[]} array
 * @param {number} searchedValue
 * @param {number|null} value
 *
 */

const contains = function(array, searchedValue) {
  return array.includes(searchedValue);
};

/**
 * @param {number[]} array
 * @return {number|null}
 *
 */

const bubbleSort = (array) => {
  return array.sort((a, b) => {
    if (array.length === 0) {
      return null;
    }
    return (+(a < b) || +(b === a) -1);
  });
};

module.exports = {
  sum, multiplicatedResult, avarageResult, rand,
  display, contains, minValue, maxValue, bubbleSort};
