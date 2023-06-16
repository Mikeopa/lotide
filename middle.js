const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    // For even length arrays, return the two middle elements
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    // For odd length arrays, return the middle element
    return [array[middleIndex]];
  }
};

module.exports = middle;