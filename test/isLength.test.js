import { expect } from "chai";
import isLength from '../src/isLength.js';

// Commented lines are the ones where tests fail

describe('Tests for isLength() from isLength.js', () => {
    it('should return true for valid lengths', () => {
        expect(isLength(0)).to.be.true;
        expect(isLength(3)).to.be.true;
    });

    it('should return false for non-integer numbers', () => {
        expect(isLength(3.5)).to.be.false;
        expect(isLength(-1)).to.be.false;
    });

    it('should return false for non-numeric values', () => {
        expect(isLength('3')).to.be.false;
        expect(isLength(null)).to.be.false;
        expect(isLength(undefined)).to.be.false;
        expect(isLength({})).to.be.false;
        expect(isLength([])).to.be.false;
    });

    it('should return false for values outside valid bounds', () => {
        expect(isLength(Infinity)).to.be.false;
        expect(isLength(-Infinity)).to.be.false;
    });

    it('should handle edge cases', () => {
        expect(isLength(NaN)).to.be.false;
        expect(isLength(-0)).to.be.true; // -0 is considered valid
    });
})