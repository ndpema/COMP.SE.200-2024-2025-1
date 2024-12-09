import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('Test toNumber() from toNumber.js', function() {

  // Test with examples from toNumber()'s comment
  it('should work with given example "toNumber(3.2) = 3.2"', function() {
    expect(toNumber(3.2)).to.equal(3.2);
  });
  it('should work with given example "toNumber(Number.MIN_VALUE) = 5e-324"', function() {
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
  });
  it('should work with given example "toNumber(Infinity) = Infinity"', function() {
    expect(toNumber(Infinity)).to.equal(Infinity);
  });
  it('should work with given example "toNumber(\'3.2\') = 3.2"', function() {
    expect(toNumber('3.2')).to.equal(3.2);
  });

  // Others for coverage
  it('should work with Number', function() {
    expect(toNumber(Number(123))).to.equal(123);
  });
  it('should work with symbols', function() {
    expect(toNumber(Symbol('test'))).to.be.NaN;
  });
  it('should work with object', function() {
    expect(toNumber({ name: 'Test' })).to.be.NaN; // isSymbol?
  });
  it('should work with true', function() {
    expect(toNumber(true)).to.equal(1);
  });
  it('should work with Boolean(false)', function() {
    expect(toNumber(new Boolean(false))).to.equal(0);
  });
  it('should work with false', function() {
    expect(toNumber(false)).to.equal(0);
  });
  it('should work with null', function() {
    expect(toNumber(null)).to.equal(0);
  });
  it('should work with [2]', function() {
    expect(toNumber([2])).to.equal(2);
  });
  it('should work with {}', function() {
    expect(toNumber({})).to.be.NaN;
  });
  it('should work with NaN', function() {
    expect(toNumber(NaN)).to.be.NaN;
  });
  it('should work with undefined', function() {
    expect(toNumber(undefined)).to.be.NaN;
  });
  it('should work with non number string', function() {
    expect(toNumber("test")).to.be.NaN;
  });
  it('should work with binary string', function() {
    expect(toNumber("0b1111")).to.equal(15);
  });
  it('should work with oct string', function() {
    expect(toNumber("0o17")).to.equal(15);
  });
  it('should work with hex string', function() {
    expect(toNumber("0xF")).to.equal(15);
  });
  it('should work with invalid hex string', function() {
    expect(toNumber("+0xF")).to.be.NaN;
  });
  it('should work with Date', function() {
    expect(toNumber(new Date("2022-03-25"))).to.equal(1648166400000);
  });
  it('should work with Date zero', function() {
    expect(toNumber(new Date("1970-01-01"))).to.equal(0);
  });
  it('should work with custom object valueOf', function() {
    class Obj {
      valueOf = true;
    };
    expect(toNumber(new Obj())).to.be.NaN;
  });

  // Just test some numbers
  it('should work with integers', function() {
    for (let i = -30; i < 30; i++){
      expect(toNumber("" + i)).to.equal(i);
    }
  });
  it('should work with decimals', function() {
    for (let i = -2; i < 2; i += 0.01){
      expect(toNumber("" + i)).to.equal(i);
    }
  });
});
