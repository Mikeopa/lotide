const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const item1 = Object.keys(object1);
  const item2 = Object.keys(object2);
  if (item1.length !== item2.length) {
    return false;
  }
  for (let key of item1) {
    const value1 = object1[key];
    const value2 = object2[key];
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

module.exports = eqObjects;