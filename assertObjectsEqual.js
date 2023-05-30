const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }  return true;
};

const eqObjects = function(object1, object2) {
  const item1 = Object.keys(object1);
  const item2 = Object.keys(object2);
  if (item1.length !== item2.length) {
    return false;
  }
  for (let keys of item1) {
    const value1 = object1[keys];
    const value2 = object2[keys];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const person1 = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'painting'],
};

const person2 = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'painting'],
};

const person3 = {
  name: 'Bob',
  age: 25,
  hobbies: ['reading', 'painting'],
};

assertObjectsEqual(person1, person2);
assertObjectsEqual(person1, person3);