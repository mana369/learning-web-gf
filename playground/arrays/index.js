const rand = function() {
  return Math.trunc(Math.random() * 10);
};

// console.log(rand(3))

// const tmb1 = [rand(1), rand(2), rand(3),rand(4)];

const tmbLength = rand() + 1;
const tmb1 = [];

console.log('Tmb length:', tmbLength);
for (let i = 0; i < tmbLength; i++) {
  //    tmb1[i] = rand(); //mechanic
  tmb1.push(rand()); // dynamic
}

// 1. feladat:
console.log('hagyományos cikklus: ');
for (let i = 0; i < tmb1.length; i++) {
  console.log(tmb1[i]);
}

// 2. feladat:
console.log('Key iterátor:');

let value = '';
for (const key in tmb1) {
  if (key == 0) {
    value = `${tmb1[key]}`;
  } else {
    value = `${value} , ${tmb1[key]}`;
  }
}
console.log(value);

// 3. feladat:

console.log('Value iterátor: ');

let result = '';
for (const val of tmb1) {
  if (result == '') {
    result = `${val}`;
  } else {
    result = `${result} ${val}`;
  }
}
console.log(result);

// 4.feladat:
console.log('FP foreach');

tmb1.forEach((value) => console.log(value));

// custom
// console.log('Kicsit maskepp');

// const tmb = new Array();

// const iterate = function (callback) {
//     for (const index in this) {
//         callback(this[index], index, this);
//     }
// };
// Array.prototype.iterate = iterate;

// tmb1.iterate((value) => console.log(value));

