var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    it('should return 1', function() {
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
});

describe('Array', function() {
  describe('#isArray()', function() {
    it('is an array', function() {
      assert.equal(true, Array.isArray([1,2,3]));
    });
  });
});

describe('Array', function() {
  describe('#Array.pop()', function() {
    it('is the output of pop array', function() {
      assert.equal('sausage', ['brocolli', 'cauliflower', 'cabbage', 'kale', 'tomato'].pop());
    });
  });
});