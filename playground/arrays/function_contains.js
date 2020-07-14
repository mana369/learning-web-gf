
const array = [1, 2, 3];

/**
 * @param {number[]} array
 * @param {number} searchedValue
 */

const contains = function(array, searchedValue) {
  const value = array[0];
  if (value == searchedValue) {
    console.log('true');
  } else {
    console.log('false');
  }
};
contains(array, 1);
