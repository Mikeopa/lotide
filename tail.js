const assertEqual = require('./assertEqual');

const tail = function(array) {
  const tailArray = [];
  for (let item = 1; item < array.length; item++) {
    tailArray.push(array[item]);
  }
  return tailArray;
};

module.exports = tail;