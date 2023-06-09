const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const item = sentence[i];
    if (item in results) {
      results[item].push(i);
    } else {
      results[item] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;