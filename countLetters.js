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

module.exports = countLetters;