import { expect } from 'chai';
import eq from '../src/eq.js';

describe('Test eq() from eq.js', function() {
  
  const object = { 'a': 1 }
  const other = { 'a': 1 }

  // Test with examples from eq()'s comment
  it('should work with given example "eq(object, object) = true"', function() {
    expect(eq(object, object)).to.be.true;
  });
  it('should work with given example "eq(object, other) = false"', function() {
    expect(eq(object, other)).to.be.false;
  });
  it('should work with given example "eq(\'a\', \'a\') = true"', function() {
    expect(eq('a', 'a')).to.be.true;
  });
  /*it('should work with given example "eq(\'a\', Object(\'a\') = false"', function() {
    expect(eq('a', Object('a'))).to.be.false; // Comment says false, is it a bug?
  });*/
  it('should work with given example "eq(NaN, NaN) = true"', function() {
    expect(eq(NaN, NaN)).to.be.true;
  });

  // Parameters order
  it('should work the same regardless of parameters order (true)', function() {
    expect(eq(object, object)).to.equal(eq(object, object));
  });
  it('should work the same regardless of parameters order (false)', function() {
    expect(eq(object, other)).to.equal(eq(other, object));
  });

  // Others
  it('should work with equal numbers', function() {
    expect(eq(2, 2)).to.be.true;
  });
  it('should work with non equal numbers', function() {
    expect(eq(2, 1)).to.be.false;
  });
});
