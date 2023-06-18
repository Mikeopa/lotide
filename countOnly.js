const countOnly = function(allItems, itemsToCount) {
  const count = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      console.log(itemsToCount[item]);
      if (item in count) {
        count[item] = count[item] + 1;
      } else {
        count[item] = 1;
      }
    }
  }
  return count;
};

module.exports = countOnly;




