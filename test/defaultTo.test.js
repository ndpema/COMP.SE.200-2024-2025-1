import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('Test defaultTo() from defaultTo.js', function() {

  // Test with examples from defaultTo()'s comment
  it('should work with given example 1', function() {
    expect(defaultTo(1, 10)).to.equal(1);
  });
  it('should work with given example 2', function() {
    expect(defaultTo(undefined, 10)).to.equal(10);
  });


});
