import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('Test toInteger() from toInteger.js', () => {

    const double = '3.2';
    const min = Number.MIN_VALUE;
    const inf = Infinity;
    const str = '3.2';

    // Test with different types of numbers

    it('should convert 3.2 to 3', () => {
        expect(toInteger(3.2)).to.equal(3);
    });

    it('should return 0.8 to 0', () => {
        expect(toInteger(0.8)).to.equal(0);
    });

    it('should convert -3.2 to -3', () => {
        expect(toInteger(-3.2)).to.equal(-3);
    });

    it('should not mutate integers, like 5', () => {
        expect(toInteger(5)).to.equal(5);
    });

    // Tests from the toInteger.js's comments

    it('should return 0 from Number.MIN_VALUE', () => {
        expect(toInteger(min)).to.equal(0);
    });

    it('should return the numeric representation of Infinity in js', () => {
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });
})