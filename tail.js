const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const tailArray = [];
  for (let item = 1; item < array.length; item++) {
    tailArray.push(array[item]);
  }
  return tailArray;
};

const arr = tail([5,6,7]);
console.log(arr);

const words = ["Yo Yo", "Lighthouse", "Labs"];
const word = tail(words);
assertEqual(words.length, 3);
assertEqual(word.length, 2);