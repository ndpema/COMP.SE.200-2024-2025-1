import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('Test isEmpty() from isEmpty.js', function() {

  // Test with examples from isEmpty()'s comment
  it('should work with given example 1', function() {
    expect(isEmpty(null)).to.be.true;
  });
  it('should work with given example 2', function() {
    expect(isEmpty(true)).to.be.true;
  });
  it('should work with given example 3', function() {
    expect(isEmpty(1)).to.be.true;
  });
  it('should work with given example 4', function() {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });
  it('should work with given example 5', function() {
    expect(isEmpty('abc')).to.be.false;
  });
  it('should work with given example 6', function() {
    expect(isEmpty({ 'a': 1 })).to.be.false;
  });
});
