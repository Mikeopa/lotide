/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log()
  }
}
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
assertEqual(1, 1);