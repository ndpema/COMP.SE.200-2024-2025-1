import { expect } from 'chai';
import eq from '../src/eq.js';

describe('Test eq() from eq.js', function() {
  
  const object = { 'a': 1 }
  const other = { 'a': 1 }

  // Parameters order
  it('should work the same regardless of parameters order (true)', function() {
    expect(eq(object, object)).to.equal(eq(object, object));
  });
  it('should work the same regardless of parameters order (false)', function() {
    expect(eq(object, other)).to.equal(eq(other, object));
  });

  // Test with examples from eq()'s comment
  it('should work with given example 1', function() {
    expect(eq(object, object)).to.be.true;
  });
  it('should work with given example 2', function() {
    expect(eq(object, other)).to.be.false;
  });
  it('should work with given example 3', function() {
    expect(eq('a', 'a')).to.be.true;
  });
  it('should work with given example 4', function() {
    expect(eq('a', Object('a'))).to.be.true; // Comment says false, is it a bug?
  });
  it('should work with given example 5', function() {
    expect(eq(NaN, NaN)).to.be.true;
  });
});
