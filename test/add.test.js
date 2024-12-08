import { expect } from 'chai';
import add from '../src/add.js';

describe('Test add() from add.js', function() {

  // Test with example from add()'s comment
  it('should work with given example "add(6, 4)) = 10"', function() {
    expect(add(6, 4)).to.equal(10);
  });

  // Parameters order
  it('should work the same regardless of parameters order (integer +- integer)', function() {
    for (let i = -100; i < 100; i += 1) {
      expect(add(123456789, 123456789 * i)).to.equal(add(123456789 * i, 123456789));
    }
  });
  it('should work the same regardless of parameters order (decimal +- decimal)', function() {
    for (let i = -100; i < 100; i += 1) {
      expect(add(0.000123456789, 0.00001 * i)).to.equal(add(0.00001 * i, 0.000123456789));
    }
  });
  it('should work the same regardless of parameters order (integer +- decimal)', function() {
    for (let i = -100; i < 100; i += 1) {
      expect(add(123456789, 0.00001 * i)).to.equal(add(0.00001 * i, 123456789));
    }
  });
  it('should work the same regardless of parameters order (decimal +- integer)', function() {
    for (let i = -100; i < 100; i += 1) {
      expect(add(0.000123456789, 123456789 * i)).to.equal(add(123456789 * i, 0.000123456789));
    }
  });

  // Integers only
  it('should work with only positive numbers', function() {
    expect(add(1, 1)).to.equal(2);
  });
  it('should work with only negative numbers', function() {
    expect(add(-1, -1)).to.equal(-2);
  });
  it('should work with only zeros', function() {
    expect(add(0, 0)).to.equal(0);
  });
  it('should work with positive and negative numbers', function() {
    expect(add(-1, 2)).to.equal(1);
  });
  it('should work with positive and zero', function() {
    expect(add(1, 0)).to.equal(1);
  });
  it('should work with negative and zero', function() {
    expect(add(-1, 0)).to.equal(-1);
  });

  // Decimals only
  it('should work with only positive decimal numbers', function() {
    expect(add(0.1, 0.1)).to.equal(0.2);
  });
  it('should work with only negative decimal numbers', function() {
    expect(add(-0.1, -0.1)).to.equal(-0.2);
  });
  it('should work with only decimal zeros', function() {
    expect(add(0.0, 0.0)).to.equal(0);
  });
  it('should work with positive and negative decimal numbers', function() {
    expect(add(-0.1, 0.2)).to.equal(0.1);
  });
  it('should work with positive and decimal zero', function() {
    expect(add(0.1, 0.0)).to.equal(0.1);
  });
  it('should work with negative and decimal zero', function() {
    expect(add(-0.1, 0.0)).to.equal(-0.1);
  });

  // Both
  it('should work with only positive both numbers', function() {
    expect(add(1, 0.1)).to.equal(1.1);
  });
  it('should work with only negative both numbers', function() {
    expect(add(-1, -0.1)).to.equal(-1.1);
  });
  it('should work with only both zeros', function() {
    expect(add(0, 0.0)).to.equal(0);
  });
  it('should work with positive and negative both numbers', function() {
    expect(add(-1, 0.2)).to.equal(-0.8);
  });
  it('should work with positive and both zero', function() {
    expect(add(1, 0.0)).to.equal(1);
  });
  it('should work with negative and both zero', function() {
    expect(add(-1, 0.0)).to.equal(-1);
  });

  // Very big and small numbers
  it('should work with infinity', function() {
    expect(add(Infinity, 1)).to.equal(Infinity);
  });
  it('should work with negative infinity', function() {
    expect(add(1, -Infinity)).to.equal(-Infinity);
  });
  it('should work with very big numbers', function() {
    expect(add(1, 1099511627776)).to.equal(1099511627777);
  });
  it('should work with very small numbers', function() {
    expect(add(-1099511627776, 1)).to.equal(-1099511627775);
  });
  it('should work with very big and small decimals', function() {
    expect(add(0.000000000000001099511627776, 1099511627776)).to.equal(1099511627776.000000000000001099511627776);
  });
});
