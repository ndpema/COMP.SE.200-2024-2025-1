import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('Test toNumber() from toNumber.js', function() {

  // Test with examples from toNumber()'s comment
  it('should work with given example 1', function() {
    expect(toNumber(3.2)).to.equal(3.2);
  });
  it('should work with given example 2', function() {
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
  });
  it('should work with given example 3', function() {
    expect(toNumber(Infinity)).to.equal(Infinity);
  });
  it('should work with given example 4', function() {
    expect(toNumber('3.2')).to.equal(3.2);
  });

});
