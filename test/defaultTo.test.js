import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('Test defaultTo() from defaultTo.js', function() {

  // Test with examples from defaultTo()'s comment
  it('should work with given example "defaultTo(1, 10) = 1"', function() {
    expect(defaultTo(1, 10)).to.equal(1);
  });
  it('should work with given example "defaultTo(undefined, 10) = 10"', function() {
    expect(defaultTo(undefined, 10)).to.equal(10);
  });

  // Others from the comment
  it('should work with null', function() {
    expect(defaultTo(null, 10)).to.equal(10);
  });
  /*it('should work with NaN', function() {
    expect(defaultTo(NaN, 10)).to.equal(10); // Comment says false, is it a bug?
  });*/

  // Others
  it('should work with both null', function() {
    expect(defaultTo(null, null)).to.be.null;
  });
});
