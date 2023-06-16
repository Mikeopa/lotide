const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${actual}`);
  }
};

const countLetters = function(count) {
  const results = {};
  for (const item of count) {
    if (item === " ") {
      continue;
    }
    if (item in results) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};
const letters = countLetters("lighthouse in the house");
console.log(letters);
assertEqual(letters["s"], 2);