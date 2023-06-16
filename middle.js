const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arrays) {
  const length = arrays.length;
  if (length <= 2) {
    return [];
  }
  const middleindex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [arrays[middleindex - 1], arrays[middleindex]];
  }
  if (length % 2 !== 0) {
    return [arrays[middleindex]];
  }
};

module.exports = middle;


