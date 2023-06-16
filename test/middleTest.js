const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [1] for [1]", () => {
    assert.deepStrictEqual(middle([1]), [1]);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepStrictEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});