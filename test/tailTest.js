const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepStrictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepStrictEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("returns ['banana', 'orange'] for ['apple', 'banana', 'orange']", () => {
    assert.deepStrictEqual(tail(['apple', 'banana', 'orange']), ['banana', 'orange']);
  });
});