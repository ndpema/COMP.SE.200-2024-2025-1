import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('Test isEmpty() from isEmpty.js', function() {

  // Test with examples from isEmpty()'s comment
  it('should work with given example "isEmpty(null) = true"', function() {
    expect(isEmpty(null)).to.be.true;
  });
  it('should work with given example "isEmpty(true) = true"', function() {
    expect(isEmpty(true)).to.be.true;
  });
  it('should work with given example "isEmpty(1) = true"', function() {
    expect(isEmpty(1)).to.be.true;
  });
  it('should work with given example "isEmpty([1, 2, 3]) = false"', function() {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });
  it('should work with given example "isEmpty(\'abc\') = false"', function() {
    expect(isEmpty('abc')).to.be.false;
  });
  it('should work with given example "isEmpty({ \'a\': 1 }) = false"', function() {
    expect(isEmpty({ 'a': 1 })).to.be.false;
  });

  // Others from the comment (excluding ones above)

  // Empty
  it('should work with false', function() {
    expect(isEmpty(false)).to.be.true;
  });
  it('should work with undefined', function() {
    expect(isEmpty(undefined)).to.be.true;
  });
  it('should work with empty {}', function() {
    expect(isEmpty({})).to.be.true;
  });
  it('should work with empty []', function() {
    expect(isEmpty([])).to.be.true;
  });
  it('should work with empty Array', function() {
    expect(isEmpty(new Array())).to.be.true;
  });
  it('should work with empty Map', function() {
    expect(isEmpty(new Map())).to.be.true;
  });
  it('should work with empty Set', function() {
    expect(isEmpty(new Set())).to.be.true;
  });
  it('should work with empty string', function() {
    expect(isEmpty("")).to.be.true;
  });
  it('should work with empty buffer', function() {
    expect(isEmpty(Buffer.alloc(0))).to.be.true;
  });
  it('should work with empty arguments object', function() {
    expect(isEmpty(function() { return arguments }())).to.be.true;
  });

  // Non empty
  it('should work with non empty Array', function() {
    let array = new Array();
    array[0] = 1;
    expect(isEmpty(array)).to.be.false;
  });
  /*it('should work with non empty Map', function() {
    let map = new Map();
    map["a"] = "b";
    expect(isEmpty(map)).to.be.false;
  });
  it('should work with non empty Set', function() {
    let set = new Set();
    set.add("a");
    expect(isEmpty(set)).to.be.false; // Comment says false, is it a bug?
  });*/
  it('should work with non empty buffer', function() {
    expect(isEmpty(Buffer.alloc(10))).to.be.false;
  });
  it('should work with non empty object', function() {
    class Obj {
      constructor() { }
      someMethod() { }
    };
    Obj.prototype.someProperty = 'value';
    expect(isEmpty(Obj.prototype)).to.be.false;
  });
});
